import { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ExternalLinkIcon,
} from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  githubLink: string;
  appLink: string;
  imageSrc: string[];
};

export default function ProjectCard({
  title,
  description,
  githubLink,
  appLink,
  imageSrc,
}: ProjectCardProps) {
  const [index, setIndex] = useState(0);

  const goTo = (newIndex: number) => {
    const clamped = Math.max(0, Math.min(newIndex, imageSrc.length - 1));
    setIndex(clamped);
  };

  return (
    <div className="border-slate-800 p-6 flex flex-col justify-between text-white h-full">
      <div>
        <h3 className="text-md flex w-full justify-center font-semibold leading-none tracking-tight mb-2">
          {title}
        </h3>

        <div className="relative w-30 h-40 mx-auto mt-4 mb-4 overflow-hidden rounded-xl">
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {imageSrc.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-30 h-50 object-cover shrink-0"
                alt={`${title} Screenshot ${i + 1}`}
              />
            ))}
          </div>

          {imageSrc.length > 1 && (
            <>
              <button
                onClick={() => goTo(index - 1)}
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <p className="text-xs text-slate-400 mb-6">{description}</p>
      </div>

      <div className="flex flex-col gap-2">
        <a
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium transition-colors h-7 px-4 py-2 bg-slate-800 hover:bg-green-900 text-white"
        >
          Zur App
          <ExternalLinkIcon className="h-4 w-4 ml-2" />
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 border border-slate-700 bg-slate-800 hover:bg-green-900 text-white"
        >
          GitHub Code
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
