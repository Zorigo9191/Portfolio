import RubikParticles from "./parts/rubikParticles";
import GradientText from "./parts/gradient-text";
import profilePic from "../assets/profile.jpg";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:justify-around w-full items-center mt-2 py-6 overflow-x-hidden transition duration-1000 gap-6">
      <div className="flex gap-4 p-2 shrink-0">
        <img
          src={profilePic}
          alt="Profilbild"
          className="mt-2 object-cover aspect-square rounded-full h-20 w-20 lg:w-28 lg:h-28 shrink-0 border-2 border-green-200 shadow-[0_0_6px_#fff,0_0_20px_#4ade80]"
        />
      </div>
      <div className="flex flex-col ">
        <GradientText />
        <div className="flex text-start text-slate-200 text-sm max-w-87.5 mt-4 ml-6">
          Hallo, ich bin Zorigo. <br />
          Ich baue interaktive Web-Erlebnisse und komme frisch aus dem
          Quereinstieg in die Frontend-Entwicklung.
        </div>
      </div>
      <div>
        <RubikParticles />
      </div>
    </div>
  );
}
