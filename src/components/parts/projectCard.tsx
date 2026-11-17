import { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ExternalLinkIcon,
} from "lucide-react";
import { TECH_ICONS } from "./techIcons";

type ProjectCardProps = {
  title: string;
  description: string;
  githubLink: string;
  appLink: string;
  imageSrc: string[];
  tech?: string[];
};

export default function ProjectCard({
  title,
  description,
  githubLink,
  appLink,
  imageSrc,
  tech,
}: ProjectCardProps) {
  const [index, setIndex] = useState(0);
  const last = imageSrc.length - 1;

  const goTo = (i: number) => setIndex(Math.max(0, Math.min(i, last)));

  return (
    <div className="flex h-full flex-col justify-between p-6 text-white">
      <div>
        <h3 className="mb-2 flex min-h-14 items-center justify-center text-center text-lg font-semibold tracking-tight">
          {title}
        </h3>

        <div className="relative mx-auto my-4 h-64 w-36 overflow-hidden rounded-xl">
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {imageSrc.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title}, Screenshot ${i + 1}`}
                className="h-full w-full shrink-0 object-cover object-top"
              />
            ))}
          </div>

          {imageSrc.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Vorheriges Bild"
                disabled={index === 0}
                onClick={() => goTo(index - 1)}
                className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70 disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Nächstes Bild"
                disabled={index === last}
                onClick={() => goTo(index + 1)}
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70 disabled:opacity-30"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <p className="mb-6 text-sm leading-relaxed text-slate-300">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {tech && tech.length > 0 && (
          <ul className="mb-2 flex min-h-16 flex-wrap content-start gap-2">
            {tech.map((t) => {
              const entry = TECH_ICONS[t];
              const Icon = entry?.icon;
              return (
                <li
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-sm text-accent"
                >
                  {Icon && (
                    <Icon className="h-4 w-4" style={{ color: entry.color }} />
                  )}
                  {t}
                </li>
              );
            })}
          </ul>
        )}

        <a
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-full items-center justify-center rounded-md bg-accent px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent/80"
        >
          Zur App
          <ExternalLinkIcon className="ml-2 h-4 w-4" />
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-full items-center justify-center rounded-md border border-accent/50 px-4 text-sm font-medium text-white transition-colors hover:bg-accent/10"
        >
          GitHub Code
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
