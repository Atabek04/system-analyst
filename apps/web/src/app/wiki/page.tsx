import Link from "next/link";
import { chapterUrl, getChapters, readingOrder } from "@/lib/chapters";

const LEDE =
  "Каждая глава ниже это карта содержания: порядок чтения по заметкам, где одна заметка раскрывает одну идею. Откройте главу, пройдите её разделы сверху вниз, а в боковой панели найдёте соседние заметки той же главы.";

export default async function HomePage() {
  const chapters = await getChapters();

  return (
    <main className="mx-auto w-full max-w-[50rem] px-6 py-14">
      <h1 className="font-serif text-[3rem] leading-[1.05] font-semibold tracking-[-0.025em] text-fd-primary">
        Системный анализ
      </h1>

      <p className="mt-6 mb-10 max-w-[62ch] text-[1.2rem] leading-relaxed text-fd-foreground">
        {LEDE}
      </p>

      <div className="grid border-t border-fd-border sm:grid-cols-2 sm:gap-x-10">
        {chapters.map((chapter) => (
          <article
            key={chapter.slug}
            className="grid grid-cols-[1.6rem_minmax(0,1fr)] gap-x-2 border-b border-fd-border py-5"
          >
            <span
              className={`font-serif text-[0.95rem] leading-tight font-semibold text-fd-muted-foreground ${chapter.published ? "" : "opacity-60"}`}
            >
              {chapter.order}
            </span>

            <div className="flex min-w-0 flex-col gap-1">
              {chapter.published ? (
                <Link
                  href={chapterUrl(chapter)}
                  className="font-serif text-[1.3rem] leading-tight font-semibold tracking-[-0.01em] text-fd-primary hover:underline hover:underline-offset-4"
                >
                  {chapter.title}
                </Link>
              ) : (
                <span className="font-serif text-[1.3rem] leading-tight font-medium tracking-[-0.01em] text-fd-muted-foreground">
                  {chapter.title}
                </span>
              )}

              {chapter.published && (
                <ul className="mt-1">
                  {readingOrder(chapter).map((note) => (
                    <li
                      key={note.url}
                      className="border-l border-fd-border py-1 pl-3 text-[0.98rem] leading-snug"
                    >
                      <Link
                        href={note.url}
                        className="text-fd-foreground hover:text-fd-primary hover:underline hover:underline-offset-4"
                      >
                        {note.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
