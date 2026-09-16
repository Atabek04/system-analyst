import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

const defaultOptions: Options = { links: {} }

export default ((userOpts?: Partial<Options>) => {
  const opts: Options = { ...defaultOptions, ...userOpts }
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>{cfg.pageTitle}</p>
        <ul>
          {Object.entries(opts.links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
