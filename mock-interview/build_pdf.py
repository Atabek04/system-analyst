# -*- coding: utf-8 -*-
"""Build the PDF answer key: question + precise model answer, tiered."""
import json, os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table,
                                TableStyle, PageBreak, HRFlowable, KeepTogether)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = json.load(open(os.path.join(HERE, "content.json"), encoding="utf-8"))

# --- Fonts with Cyrillic support (Windows Arial) ---
FONTS = {
    "R": r"C:\Windows\Fonts\arial.ttf",
    "B": r"C:\Windows\Fonts\arialbd.ttf",
    "I": r"C:\Windows\Fonts\ariali.ttf",
}
pdfmetrics.registerFont(TTFont("Body", FONTS["R"]))
pdfmetrics.registerFont(TTFont("Body-B", FONTS["B"]))
pdfmetrics.registerFont(TTFont("Body-I", FONTS["I"]))
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily("Body", normal="Body", bold="Body-B", italic="Body-I", boldItalic="Body-B")

# --- Palette ---
INK = colors.HexColor("#1a1a2e")
ACCENT = colors.HexColor("#0f4c81")
MUTED = colors.HexColor("#5a5a68")
LINE = colors.HexColor("#d5d9e0")
TIER_COLORS = {
    "Warm-up": colors.HexColor("#7a869a"),
    "Junior":  colors.HexColor("#2e8b57"),
    "Middle":  colors.HexColor("#c77d0a"),
    "Senior":  colors.HexColor("#b23a48"),
    "Probe":   colors.HexColor("#6a4c93"),
}
ANSWER_BG = colors.HexColor("#f2f6fa")

styles = getSampleStyleSheet()
def S(name, **kw):
    base = dict(fontName="Body", textColor=INK, leading=14)
    base.update(kw)
    return ParagraphStyle(name, **base)

st_title   = S("t", fontName="Body-B", fontSize=24, textColor=ACCENT, leading=28, alignment=TA_CENTER)
st_sub     = S("s", fontName="Body", fontSize=13, textColor=MUTED, leading=17, alignment=TA_CENTER)
st_meta    = S("m", fontSize=10.5, textColor=MUTED, leading=15)
st_h2      = S("h2", fontName="Body-B", fontSize=15, textColor=colors.white, leading=19)
st_intro   = S("in", fontName="Body-I", fontSize=9.5, textColor=MUTED, leading=13)
st_q       = S("q", fontName="Body-B", fontSize=11, textColor=INK, leading=15)
st_a       = S("a", fontSize=10, textColor=colors.HexColor("#23272e"), leading=14.5)
st_alabel  = S("al", fontName="Body-B", fontSize=8.5, textColor=ACCENT, leading=11)
st_tier    = S("ti", fontName="Body-B", fontSize=8, textColor=colors.white, leading=10, alignment=TA_CENTER)
st_toc     = S("toc", fontSize=11, textColor=INK, leading=18)

def tier_chip(tier):
    c = TIER_COLORS.get(tier, MUTED)
    t = Table([[Paragraph(tier.upper(), st_tier)]], colWidths=[24*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), c),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING", (0,0), (-1,-1), 2.5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 2.5),
        ("LEFTPADDING", (0,0), (-1,-1), 2),
        ("RIGHTPADDING", (0,0), (-1,-1), 2),
    ]))
    return t

story = []
W = A4[0] - 40*mm  # usable width

# ---------- COVER ----------
m = DATA["meta"]
story.append(Spacer(1, 55*mm))
story.append(Paragraph(m["title"], st_title))
story.append(Spacer(1, 5*mm))
story.append(Paragraph(m["subtitle"], st_sub))
story.append(Spacer(1, 3*mm))
story.append(Paragraph("КЛЮЧ С ОТВЕТАМИ (для интервьюера)", S("k", fontName="Body-B", fontSize=12, textColor=colors.HexColor("#b23a48"), alignment=TA_CENTER)))
story.append(Spacer(1, 14*mm))
story.append(HRFlowable(width=W*0.5, thickness=1, color=LINE, hAlign="CENTER"))
story.append(Spacer(1, 10*mm))
st_ilabel = S("ilab", fontName="Body-B", fontSize=10, textColor=ACCENT, leading=14)
st_ival   = S("ival", fontName="Body", fontSize=10, textColor=INK, leading=14)
info = [
    [Paragraph("Длительность:", st_ilabel), Paragraph(m["duration"], st_ival)],
    [Paragraph("Формат:", st_ilabel), Paragraph("Вопрос, затем точный ответ. Уровни: Warm-up / Junior / Middle / Senior / Probe.", st_ival)],
    [Paragraph("Раунды:", st_ilabel), Paragraph(m["rounds_note"], st_ival)],
]
it = Table(info, colWidths=[32*mm, W-32*mm])
it.setStyle(TableStyle([
    ("VALIGN",(0,0),(-1,-1),"TOP"),
    ("BOTTOMPADDING",(0,0),(-1,-1),7),("LEFTPADDING",(0,0),(0,-1),0),
]))
story.append(it)
story.append(Spacer(1, 10*mm))
story.append(Paragraph("Шкала оценки", st_alabel))
story.append(Spacer(1, 2*mm))
for s in m["rating_scale"]:
    story.append(Paragraph("• " + s, st_meta))
story.append(Spacer(1, 8*mm))
story.append(Paragraph("Как вести интервью", st_alabel))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(m["how_to_use"], st_meta))
story.append(PageBreak())

# ---------- TOC ----------
story.append(Paragraph("Содержание", S("toch", fontName="Body-B", fontSize=18, textColor=ACCENT)))
story.append(Spacer(1, 6*mm))
for sec in DATA["sections"]:
    n = len(sec["questions"])
    story.append(Paragraph(f'<b>{sec["id"]}.</b> {sec["title"]} <font color="#8a8a96">({n})</font>', st_toc))
total = sum(len(s["questions"]) for s in DATA["sections"])
story.append(Spacer(1, 6*mm))
story.append(HRFlowable(width=W, thickness=0.5, color=LINE))
story.append(Spacer(1, 3*mm))
story.append(Paragraph(f"Всего вопросов: {total}", S("tt", fontName="Body-B", fontSize=11, textColor=INK)))
story.append(PageBreak())

# ---------- SECTIONS ----------
def section_header(sec):
    hdr = Table([[Paragraph(f'{sec["id"]}.  {sec["title"]}', st_h2)]], colWidths=[W])
    hdr.setStyle(TableStyle([
        ("BACKGROUND",(0,0),(-1,-1),ACCENT),
        ("TOPPADDING",(0,0),(-1,-1),7),("BOTTOMPADDING",(0,0),(-1,-1),7),
        ("LEFTPADDING",(0,0),(-1,-1),8),("VALIGN",(0,0),(-1,-1),"MIDDLE"),
    ]))
    return hdr

qnum = 0
for sec in DATA["sections"]:
    block = [section_header(sec), Spacer(1, 2*mm),
             Paragraph(sec["intro"], st_intro), Spacer(1, 4*mm)]
    story.append(KeepTogether(block))
    for q in sec["questions"]:
        qnum += 1
        # question row: chip + number + question
        qtbl = Table([[tier_chip(q["tier"]),
                       Paragraph(f'<b>Q{qnum}.</b>&nbsp; {q["q"]}', st_q)]],
                     colWidths=[26*mm, W-26*mm])
        qtbl.setStyle(TableStyle([
            ("VALIGN",(0,0),(-1,-1),"TOP"),
            ("LEFTPADDING",(0,0),(0,-1),0),("LEFTPADDING",(1,0),(1,-1),4),
            ("TOPPADDING",(0,0),(-1,-1),1),("BOTTOMPADDING",(0,0),(-1,-1),1),
        ]))
        # answer box
        alabel = "ЧТО СЛУШАТЬ" if q["tier"] == "Probe" else "ОТВЕТ"
        acell = [Paragraph(alabel, st_alabel), Spacer(1, 1.5*mm),
                 Paragraph(q["a"], st_a)]
        atbl = Table([[acell]], colWidths=[W])
        atbl.setStyle(TableStyle([
            ("BACKGROUND",(0,0),(-1,-1),ANSWER_BG),
            ("LEFTPADDING",(0,0),(-1,-1),8),("RIGHTPADDING",(0,0),(-1,-1),8),
            ("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),
            ("LINEBEFORE",(0,0),(0,-1),2.5,ACCENT),
        ]))
        story.append(KeepTogether([qtbl, Spacer(1, 2*mm), atbl,
                                   Spacer(1, 5*mm)]))
    story.append(Spacer(1, 3*mm))

# ---------- footer with page numbers ----------
def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Body", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(20*mm, 12*mm, "Mock Interview — Senior System Analyst · Ключ с ответами")
    canvas.drawRightString(A4[0]-20*mm, 12*mm, f"Стр. {doc.page}")
    canvas.setStrokeColor(LINE)
    canvas.line(20*mm, 15*mm, A4[0]-20*mm, 15*mm)
    canvas.restoreState()

def cover_footer(canvas, doc):
    pass

doc = SimpleDocTemplate(os.path.join(HERE, "Senior-SA-Interview_ANSWER-KEY.pdf"),
                        pagesize=A4, leftMargin=20*mm, rightMargin=20*mm,
                        topMargin=18*mm, bottomMargin=20*mm,
                        title=m["title"] + " — Answer Key")
doc.build(story, onFirstPage=cover_footer, onLaterPages=footer)
print("PDF built:", os.path.join(HERE, "Senior-SA-Interview_ANSWER-KEY.pdf"))
