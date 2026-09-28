export default function Contact() {
  return (
    <div className="grid grid-cols-1 w-full px-4 mt-10 mx-auto md:max-w-150 lg:max-w-2/3 sm:grid-cols-2 text-slate-200 h-60 gap-6">
      <div>
        <h2 className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#22C55E,#10B981,#06B6D4,#3B82F6,#22C55E)] font-bold text-2xl">
          Noch Fragen?
        </h2>
        <p className="flex mt-4 text-xs ">
          Zögern Sie nicht mich zu kontaktieren. <br />
          Nutzen Sie dafür gerne die unten aufgeführte E-Mail Adresse!
        </p>
        <a
          href="mailto:zorigo.enkhtur@gmail.com"
          className="flex underline hover:text-blue-400 bg-clip-text text-transparent transition-colors bg-[linear-gradient(to_right,#22C55E,#10B981,#06B6D4,#3B82F6,#22C55E)] font-bold text-xs mt-4"
        >
          ezoken59@yahoo.com
        </a>
      </div>
      <div>
        <h2 className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#22C55E,#10B981,#06B6D4,#3B82F6,#22C55E)] font-bold text-2xl">
          Weitere Erfahrungen
        </h2>
        <p className="flex mt-4 text-xs ">
          Auf meinem GitHub-Profil finden Sie weitere Projekte, die ich im Laufe
          der Zeit erstellt habe. Dort können Sie sich auch selbst von meinem
          Code überzeugen.
        </p>
        <a
          href="https://github.com/Zorigo9191"
          target="_blank"
          className="flex underline hover:text-blue-400 bg-clip-text text-transparent transition-colors bg-[linear-gradient(to_right,#22C55E,#10B981,#06B6D4,#3B82F6,#22C55E)] font-bold text-xs "
        >
          https://github.com/Zorigo9191
        </a>
      </div>
    </div>
  );
}
