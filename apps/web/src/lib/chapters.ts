import fs from "node:fs/promises";
import path from "node:path";
import type * as PageTree from "fumadocs-core/page-tree";
import { getSource, WIKI_URL } from "./source";

const VAULT_ROOT = path.resolve(process.cwd(), "../..");
const CHAPTERS_FILE = path.join(VAULT_ROOT, "chapters.json");
const MOC_FILE = path.join(
  VAULT_ROOT,
  "2-MOC",
  "Middle System Analyst Roadmap.md",
);

interface ChapterMeta {
  title: string;
  blurb: string;
}

export interface ChapterNote {
  slug: string;
  title: string;
  url: string;
  /** frontmatter `order`; notes without one sort last */
  order: number;
}

export interface ChapterSection {
  heading: string | null;
  notes: ChapterNote[];
}

export interface Chapter {
  slug: string;
  title: string;
  blurb: string;
  /** position in the reading order, 1-based */
  order: number;
  sections: ChapterSection[];
  /** false while the chapter is still only a plan in the roadmap */
  published: boolean;
}

const WIKILINK = /\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g;
/** trailing italic asides in a heading are notes to the author, not to the student */
const AUTHOR_ASIDE = /\s*\*\(.*?\)\*\s*$/;

/**
 * The roadmap is the reading order. Its `##` chapters line up positionally with
 * the keys of chapters.json, its `###` lines are sections, and its wikilinks are
 * the notes. Links to notes that do not exist yet are dropped: the roadmap plans
 * further ahead than the vault is written.
 */
export async function getChapters(): Promise<Chapter[]> {
  const [metaByslug, roadmap, source] = await Promise.all([
    fs
      .readFile(CHAPTERS_FILE, "utf8")
      .then((raw) => JSON.parse(raw) as Record<string, ChapterMeta>),
    fs.readFile(MOC_FILE, "utf8"),
    getSource(),
  ]);

  const pages = new Map(
    source
      .getPages()
      .map((page) => [path.basename(page.path).replace(/\.md$/, ""), page]),
  );

  const slugs = Object.keys(metaByslug);
  const chapters: Chapter[] = [];

  for (const line of roadmap.replace(/^﻿/, "").split(/\r?\n/)) {
    if (line.startsWith("## ")) {
      const slug = slugs[chapters.length];
      if (!slug) break;
      chapters.push({
        slug,
        ...metaByslug[slug],
        order: chapters.length + 1,
        sections: [{ heading: null, notes: [] }],
        published: false,
      });
      continue;
    }

    const chapter = chapters.at(-1);
    if (!chapter) continue;

    if (line.startsWith("### ")) {
      chapter.sections.push({
        heading: line.slice(4).replace(AUTHOR_ASIDE, "").trim(),
        notes: [],
      });
      continue;
    }

    for (const match of line.matchAll(WIKILINK)) {
      const target = match[1].trim().split("/").pop()!;
      const page = pages.get(target);
      if (!page) continue;
      chapter.sections.at(-1)!.notes.push({
        slug: target,
        title: page.data.title,
        url: page.url,
        order: Number(page.data.frontmatter.order) || Number.MAX_SAFE_INTEGER,
      });
    }
  }

  for (const chapter of chapters) {
    chapter.sections = chapter.sections.filter((s) => s.notes.length > 0);
    chapter.published = chapter.sections.length > 0;
  }

  return chapters;
}

export function chapterUrl(chapter: Pick<Chapter, "slug">): string {
  return `${WIKI_URL}/${chapter.slug}`;
}

export async function getChapter(slug: string): Promise<Chapter | undefined> {
  return (await getChapters()).find((chapter) => chapter.slug === slug);
}

/**
 * The roadmap groups a chapter's notes by topic, which is not the order they are
 * meant to be read in; each note states that itself in its frontmatter `order`.
 * Anywhere the notes appear as one flat list, that is the order to use.
 */
export function readingOrder(chapter: Chapter): ChapterNote[] {
  return chapter.sections
    .flatMap((section) => section.notes)
    .sort((a, b) => a.order - b.order);
}

/**
 * The sidebar is the roadmap, not the folder listing: chapters carry their Russian
 * title and their place in the reading order, and so do the notes inside them.
 */
export async function getPageTree(): Promise<PageTree.Root> {
  const chapters = await getChapters();

  return {
    name: "Оглавление",
    children: chapters
      .filter((chapter) => chapter.published)
      .map((chapter) => ({
        type: "folder",
        $id: chapter.slug,
        name: chapter.title,
        index: {
          type: "page",
          $id: chapter.slug,
          name: chapter.title,
          url: chapterUrl(chapter),
        },
        children: readingOrder(chapter).map((note) => ({
          type: "page",
          $id: note.url,
          name: note.title,
          url: note.url,
        })),
      })),
  };
}
