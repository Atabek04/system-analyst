// Build the DOCX worksheet: question + rating scale + notes field per question.
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  PageBreak, TableOfContents, PageNumber, Header, Footer, VerticalAlign,
} = require("docx");

const DATA = JSON.parse(fs.readFileSync(path.join(__dirname, "content.json"), "utf8"));

const ACCENT = "0F4C81";
const INK = "1A1A2E";
const MUTED = "5A5A68";
const LINE = "D5D9E0";
const NOTEBG = "FBFCFD";
const TIER = {
  "Warm-up": "7A869A", "Junior": "2E8B57", "Middle": "C77D0A",
  "Senior": "B23A48", "Probe": "6A4C93",
};
const FONT = "Calibri";
const DXA = WidthType.DXA;
const FULL = 9360; // usable width for A4 with ~1in margins (approx)

const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder,
                    insideHorizontal: noBorder, insideVertical: noBorder };

function run(text, opt = {}) {
  return new TextRun({ text, font: FONT, size: opt.size || 20,
    bold: opt.bold || false, italics: opt.italics || false,
    color: opt.color || INK, allCaps: opt.caps || false });
}
function p(children, opt = {}) {
  return new Paragraph({ children: Array.isArray(children) ? children : [children],
    spacing: { after: opt.after !== undefined ? opt.after : 80, before: opt.before || 0,
               line: opt.line || 264 },
    alignment: opt.align, ...(opt.rest || {}) });
}

// ---- tier chip as a tiny shaded 1-cell table ----
function tierChip(tier) {
  return new Table({
    width: { size: 1500, type: DXA }, columnWidths: [1500],
    borders: noBorders,
    rows: [new TableRow({ children: [new TableCell({
      width: { size: 1500, type: DXA },
      shading: { type: ShadingType.CLEAR, fill: TIER[tier] || MUTED, color: "auto" },
      margins: { top: 20, bottom: 20, left: 40, right: 40 },
      verticalAlign: VerticalAlign.CENTER,
      children: [ p(run(tier.toUpperCase(), { size: 15, bold: true, color: "FFFFFF" }),
                    { after: 0, align: AlignmentType.CENTER }) ],
    })]})],
  });
}

const children = [];

// ---------- COVER ----------
const m = DATA.meta;
children.push(p([], { after: 2600 }));
children.push(p(run(m.title, { size: 48, bold: true, color: ACCENT }),
  { align: AlignmentType.CENTER, after: 120 }));
children.push(p(run(m.subtitle, { size: 26, color: MUTED }),
  { align: AlignmentType.CENTER, after: 80 }));
children.push(p(run("РАБОЧИЙ ЛИСТ ИНТЕРВЬЮЕРА (для заметок и оценок)",
  { size: 22, bold: true, color: "B23A48" }), { align: AlignmentType.CENTER, after: 500 }));

function coverRow(label, value) {
  return new TableRow({ children: [
    new TableCell({ width: { size: 2100, type: DXA }, borders: noBorders,
      margins: { top: 40, bottom: 40, right: 120 },
      children: [ p(run(label, { bold: true, color: ACCENT }), { after: 0 }) ] }),
    new TableCell({ width: { size: FULL - 2100, type: DXA }, borders: noBorders,
      margins: { top: 40, bottom: 40 },
      children: [ p(run(value, { color: INK }), { after: 0 }) ] }),
  ]});
}
children.push(new Table({ width: { size: FULL, type: DXA }, columnWidths: [2100, FULL - 2100],
  borders: noBorders, rows: [
    coverRow("Кандидат:", "_______________________________________________"),
    coverRow("Интервьюер:", "_______________________________________________"),
    coverRow("Дата:", "________________________"),
    coverRow("Длительность:", m.duration),
    coverRow("Раунды:", m.rounds_note),
  ]}));
children.push(p([], { after: 300 }));

// scale
children.push(p(run("Шкала оценки", { size: 20, bold: true, color: ACCENT, caps: true }), { after: 100 }));
m.rating_scale.forEach(s => children.push(p(run("•  " + s, { size: 19, color: MUTED }), { after: 40 })));
children.push(p([], { after: 200 }));
children.push(p(run("Как вести интервью", { size: 20, bold: true, color: ACCENT, caps: true }), { after: 100 }));
children.push(p(run(m.how_to_use, { size: 19, color: MUTED }), { after: 0 }));
children.push(p(new PageBreak()));

// ---------- TOC ----------
children.push(new Paragraph({ heading: HeadingLevel.HEADING_1,
  children: [run("Содержание", { size: 34, bold: true, color: ACCENT })],
  spacing: { after: 200 } }));
children.push(new TableOfContents("Содержание", { hyperlink: true, headingStyleRange: "2-2" }));
children.push(p(new PageBreak()));

// ---------- SECTIONS ----------
let qnum = 0;
DATA.sections.forEach(sec => {
  // section header bar
  children.push(new Table({ width: { size: FULL, type: DXA }, columnWidths: [FULL],
    borders: noBorders,
    rows: [new TableRow({ children: [new TableCell({
      width: { size: FULL, type: DXA },
      shading: { type: ShadingType.CLEAR, fill: ACCENT, color: "auto" },
      margins: { top: 100, bottom: 100, left: 160, right: 120 },
      children: [ new Paragraph({ heading: HeadingLevel.HEADING_2,
        spacing: { after: 0 },
        children: [ new TextRun({ text: `${sec.id}.  ${sec.title}`,
          font: FONT, size: 26, bold: true, color: "FFFFFF" }) ] }) ],
    })]})],
  }));
  children.push(p(run(sec.intro, { size: 18, italics: true, color: MUTED }),
    { before: 120, after: 200 }));

  sec.questions.forEach(q => {
    qnum++;
    // chip + question in a 2-col borderless table
    const qRow = new Table({ width: { size: FULL, type: DXA }, columnWidths: [1600, FULL - 1600],
      borders: noBorders,
      rows: [new TableRow({ children: [
        new TableCell({ width: { size: 1600, type: DXA }, borders: noBorders,
          margins: { top: 30, right: 120 }, verticalAlign: VerticalAlign.TOP,
          children: [ tierChip(q.tier) ] }),
        new TableCell({ width: { size: FULL - 1600, type: DXA }, borders: noBorders,
          margins: { top: 30 },
          children: [ p([ run(`Q${qnum}.  `, { size: 21, bold: true, color: ACCENT }),
                          run(q.q, { size: 21, bold: true, color: INK }) ], { after: 0 }) ] }),
      ]})],
    });
    children.push(qRow);

    // rating line
    children.push(p([
      run("Оценка:  ", { size: 18, bold: true, color: MUTED }),
      run("1    2    3    4    5", { size: 18, color: MUTED }),
      run("        Флаг: ⬜ сильный   ⬜ слабый   ⬜ уточнить", { size: 16, color: MUTED }),
    ], { before: 100, after: 60 }));

    // notes box (shaded cell with blank lines)
    const noteLines = q.tier === "Probe" ? 5 : 4;
    const inner = [ p(run("Заметки / доказательства ответа:", { size: 16, bold: true, color: MUTED }), { after: 60 }) ];
    for (let i = 0; i < noteLines; i++) {
      inner.push(new Paragraph({ spacing: { after: 60, line: 300 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE } },
        children: [ run("", {}) ] }));
    }
    children.push(new Table({ width: { size: FULL, type: DXA }, columnWidths: [FULL],
      borders: {
        top: { style: BorderStyle.SINGLE, size: 4, color: LINE },
        bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE },
        left: { style: BorderStyle.SINGLE, size: 12, color: ACCENT },
        right: { style: BorderStyle.SINGLE, size: 4, color: LINE },
        insideHorizontal: noBorder, insideVertical: noBorder },
      rows: [new TableRow({ children: [new TableCell({
        width: { size: FULL, type: DXA },
        shading: { type: ShadingType.CLEAR, fill: NOTEBG, color: "auto" },
        margins: { top: 80, bottom: 80, left: 140, right: 140 },
        children: inner,
      })]})],
    }));
    children.push(p([], { after: 220 }));
  });
  children.push(p([], { after: 120 }));
});

// ---------- FINAL RECOMMENDATION ----------
children.push(p(new PageBreak()));
children.push(new Paragraph({ heading: HeadingLevel.HEADING_2,
  children: [run("Итоговая оценка и рекомендация", { size: 28, bold: true, color: ACCENT })],
  spacing: { after: 200 } }));
const summaryBlocks = [
  "Сильные стороны (с примерами ответов):",
  "Слабые стороны / пробелы:",
  "Темы для практического раунда (SQL, диаграммы, кейсы):",
  "Общее впечатление и уровень (Junior / Middle / Senior / выше):",
];
summaryBlocks.forEach(label => {
  children.push(p(run(label, { size: 20, bold: true, color: INK }), { before: 160, after: 80 }));
  for (let i = 0; i < 3; i++) {
    children.push(new Paragraph({ spacing: { after: 80, line: 320 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE } },
      children: [ run("", {}) ] }));
  }
});
children.push(p([], { after: 200 }));
children.push(p(run("Рекомендация:   ⬜ Нанимать   ⬜ Скорее да   ⬜ Скорее нет   ⬜ Отказ",
  { size: 22, bold: true, color: INK }), { after: 0 }));

// ---------- DOCUMENT ----------
const doc = new Document({
  creator: "System Analyst Bootcamp",
  title: m.title + " — Worksheet",
  features: { updateFields: true },
  styles: {
    default: { document: { run: { font: FONT, size: 20, color: INK } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 34, bold: true, color: ACCENT } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 26, bold: true, color: ACCENT } },
    ],
  },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 },  // A4 DXA
      margin: { top: 1080, bottom: 1080, left: 1180, right: 1180 } } },
    headers: { default: new Header({ children: [ p(run("Mock Interview — Senior System Analyst · Рабочий лист",
      { size: 15, color: MUTED }), { after: 0, align: AlignmentType.RIGHT }) ] }) },
    footers: { default: new Footer({ children: [ new Paragraph({
      alignment: AlignmentType.RIGHT, spacing: { before: 60 },
      children: [ new TextRun({ text: "Стр. ", font: FONT, size: 15, color: MUTED }),
        new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 15, color: MUTED }) ] }) ] }) },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => {
  const out = path.join(__dirname, "Senior-SA-Interview_WORKSHEET.docx");
  fs.writeFileSync(out, buf);
  console.log("DOCX built:", out, "| questions:", qnum);
});
