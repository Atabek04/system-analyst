import { getSource } from "@/lib/source";
import { getChapter, getChapters } from "@/lib/chapters";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import * as ObsidianComponents from "fumadocs-obsidian/ui";

export default async function Page(props: PageProps<"/wiki/[...slug]">) {
  const { slug } = await props.params;

  const chapter = slug.length === 1 ? await getChapter(slug[0]) : undefined;
  if (chapter?.published) {
    return (
      <DocsPage>
        <DocsTitle>{chapter.title}</DocsTitle>
        <DocsDescription>{chapter.blurb}</DocsDescription>
        <DocsBody>
          {chapter.sections.map((section, i) => (
            <section key={section.heading ?? i}>
              {section.heading && <h3>{section.heading}</h3>}
              <ul>
                {section.notes.map((note) => (
                  <li key={note.url}>
                    <Link href={note.url}>{note.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </DocsBody>
      </DocsPage>
    );
  }

  const source = await getSource();
  const page = source.getPage(slug);
  if (!page) notFound();

  const { body, toc } = await (
    await page.data.load()
  ).render({
    ...defaultMdxComponents,
    ...ObsidianComponents,
    a: createRelativeLink(source, page),
  });

  return (
    <DocsPage toc={toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>{body}</DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const [source, chapters] = await Promise.all([getSource(), getChapters()]);

  return [
    ...source.generateParams(),
    ...chapters
      .filter((chapter) => chapter.published)
      .map((chapter) => ({ slug: [chapter.slug] })),
  ];
}

export async function generateMetadata(
  props: PageProps<"/wiki/[...slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;

  const chapter = slug.length === 1 ? await getChapter(slug[0]) : undefined;
  if (chapter?.published) {
    return { title: chapter.title, description: chapter.blurb };
  }

  const source = await getSource();
  const page = source.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
