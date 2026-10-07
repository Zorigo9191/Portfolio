import ProjectCard from "./parts/projectCard";
import wetter1 from "../assets/wetter1.png";
import wetter2 from "../assets/wetter2.png";

import piz1 from "../assets/piz1.png";
import piz2 from "../assets/piz2.png";
import fahr1 from "../assets/fahr1.png";
import fahr2 from "../assets/fahr2.png";

export default function Projects() {
  return (
    // <div className="flex flex-col w-full px-4 mt-6 mx-auto md:max-w-150 lg:max-w-2/3 ">
    <div className="flex flex-col w-full mt-6">
      <h2 className="flex w-full justify-center items-center bg-clip-text text-transparent bg-[linear-gradient(to_right,#22C55E,#10B981,#06B6D4,#3B82F6,#22C55E)] font-bold text-2xl">
        Meine Projekte
      </h2>
      <div className="grid  w-full  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  text-white gap-4 mt-8">
        <p className="border-2 border-[#3EDED3] rounded-2xl">
          <ProjectCard
            title={"Moderne Wetter - App"}
            description={
              'Meine moderne Wetter App zeigt aktuelle Wetterdaten für Städte auf der ganzen Welt an. Die App wurde "mobile-first" entwickelt und für Mobilgeräte aller Art optimiert. Der Nutzer hat die Möglichkeit, Orte in einer Favoritenliste zu speichern und diese Liste zu bearbeiten.'
            }
            githubLink={"https://github.com/Zorigo9191/wetter-app2"}
            imageSrc={[wetter1, wetter2]}
            appLink={"https://zorigo9191.github.io/wetter-app2/"}
          />
        </p>

        <p
          className="border-2
          border-[#3EDED3] rounded-2xl"
        >
          <ProjectCard
            title={"Fahrlehrer - Assistent"}
            description={
              "Diese moderne App wurde speziell für den Einsatz in Fahrschulen entwickelt. Sie unterstützt Fahrlehrer dabei, ihren Arbeitsalltag effizienter zu organisieren und verschiedene Aufgaben zentral zu verwalten.Ziel der Anwendung ist es, den Fahrschulalltag zu vereinfachen und Fahrlehrern möglichst viele organisatorische Aufgaben abzunehmen."
            }
            githubLink={"https://github.com/Zorigo9191/Fahrlehrer-Assistent"}
            imageSrc={[fahr1, fahr2]}
            appLink={"https://fahrlehrer-assistent.vercel.app/"}
          />
        </p>

        <p className="border-2  border-[#3EDED3] rounded-2xl ">
          <ProjectCard
            title={"Pizzeria Mama Mia"}
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
