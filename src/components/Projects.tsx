import ProjectCard from "./parts/projectCard";
import wetter1 from "../assets/wetter1.png";
import wetter2 from "../assets/wetter2.png";

import piz1 from "../assets/piz1.png";
import piz2 from "../assets/piz2.png";
import fahr1 from "../assets/fahr1.png";
import fahr2 from "../assets/fahr2.png";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";

export default function Projects() {
  return (
    <div className="flex flex-col w-full mt-6">
      <h2 className="flex w-full justify-center items-center bg-clip-text text-transparent bg-[linear-gradient(to_right,#22C55E,#10B981,#06B6D4,#3B82F6,#22C55E)] font-bold text-2xl">
        Meine Projekte
      </h2>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-slate-200">
        <p className="border-2  border-[#3EDED3] rounded-2xl ">
          <ProjectCard
            title={"DevBoard"}
            demoLogin={
              "\nTest Nutzer:  \ndev-user1@a.de,  \ndev-user2@a.de \n· Passwort: 400400"
            }
            tech={[
              "Eigenes Backend",
              "React",
              "Tailwind",
              "TypeScript",
              "NestJS",
              "Supabase",
            ]}
            description={
              "DevBoard ist eine Webanwendung zur Aufgabenverwaltung, gedacht für kleine Firmen und private Gruppen, die ihre Aufgaben übersichtlich in Boards aufteilen möchten. Gemeinsam mit dem Kurs habe ich das Frontend (React, Tailwind) umgesetzt und im Anschluss das komplette Backend selbst entwickelt: eine NestJS-API mit getrennten Modulen für Boards und Tasks, Supabase als Datenbank und Login per E-Mail und Passwort."
            }
            githubLink={"https://github.com/Zorigo9191/tailwind-react-devboard"}
            imageSrc={[dev1, dev2]}
            appLink={"https://tailwind-react-devboard-hlnb.vercel.app/#/login"}
          />
        </p>
        <p
          className="border-2
          border-[#3EDED3] rounded-2xl"
        >
          <ProjectCard
            title={"Fahrlehrer-Assistent"}
            tech={[
              "Eigenes Backend",
              "React",
              "Tailwind",
              "TypeScript",
              "NestJS",
              "Supabase",
            ]}
            description={
              "Diese App wurde speziell für den Einsatz in Fahrschulen entwickelt. Sie unterstützt Fahrlehrer dabei, ihren Arbeitsalltag effizienter zu organisieren und Aufgaben zentral zu verwalten. Ziel ist es, den Fahrschulalltag zu vereinfachen und organisatorische Aufgaben abzunehmen. Neben dem Frontend (React, Tailwind, TypeScript) habe ich auch das Backend selbst gebaut: eine NestJS-API mit Supabase als Datenbank."
            }
            demoLogin={
              "\nFahrschulbüro: office@a.de \n· Passwort: 300300\nFahrlehrer:   fahrlehrer-1@a.de, fahrlehrer-2@a.de \n· Passwort: 200200\nFahrschüler: s1@a.de, s2@a.de \n· Passwort: 100100"
            }
            githubLink={"https://github.com/Zorigo9191/Fahrlehrer-Assistent"}
            imageSrc={[fahr1, fahr2]}
            appLink={"https://fahrlehrer-assistent.vercel.app/"}
          />
        </p>
        <p className="border-2 border-[#3EDED3] rounded-2xl">
          <ProjectCard
            title={"Moderne Wetter - App"}
            tech={["JavaScript", "Wetter-API", "SCSS"]}
            description={
              'Meine moderne Wetter App zeigt aktuelle Wetterdaten für Städte auf der ganzen Welt an. Die App wurde "mobile-first" entwickelt und für Mobilgeräte aller Art optimiert. Der Nutzer hat die Möglichkeit, Orte in einer Favoritenliste zu speichern und diese Liste zu bearbeiten.'
            }
            githubLink={"https://github.com/Zorigo9191/wetter-app2"}
            imageSrc={[wetter1, wetter2]}
            appLink={"https://zorigo9191.github.io/wetter-app2/"}
          />
        </p>

        <p className="border-2  border-[#3EDED3] rounded-2xl ">
          <ProjectCard
            title={"Pizzeria Mama Mia"}
            tech={["HTML", "CSS"]}
            description={
              "Die Website für die fiktive Pizzeria Mamma Mia ist ein moderner One-Pager in ansprechendem dunklen Design. Das Layout ist darauf ausgelegt, den Besucher der Seite zu einem Besuch im Restaurant anzuregen. Ich habe das Design responsive umgesetzt und für gängige Bildschirmgrößen optimiert."
            }
            githubLink={"https://github.com/Zorigo9191/pizzeria"}
            imageSrc={[piz1, piz2]}
            appLink={"https://zorigo9191.github.io/pizzeria/"}
          />
        </p>
      </div>
    </div>
  );
}
