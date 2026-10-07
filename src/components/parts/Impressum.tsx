// import { useEffect } from "react";

// export default function Impressum() {
//   return (
//     <div className="flex flex-col w-full px-4 mt-6 mx-auto md:max-w-150 lg:max-w-2/3 text-slate-200 bg-blue-950 rounded-2xl p-6 gap-6">
//       <div>
//         <h2 className="text-2xl font-bold mb-2">Impressum</h2>
//         <h4 className="text-xl text-slate-400 mb-1">Angaben gemäß § 5 DDG</h4>
//         <p className="text-sm">
//           Zorigo <br />
//           PLZ 79576, Weil am Rhein
//         </p>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold mb-2">Kontakt</h2>
//         <p className="text-sm">E-Mail: zorigo.dev@proton.me</p>
//       </div>
//     </div>
//   );
// }

export default function Impressum() {
  return (
    <div className="flex flex-col w-full mt-6 text-slate-200 bg-blue-950 rounded-2xl p-6 gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Impressum</h2>
        <h4 className="text-xl text-slate-400 mb-1">Angaben gemäß § 5 DDG</h4>
        <p className="text-sm">
          Zorigo <br />
          PLZ 79576, Weil am Rhein
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Kontakt</h2>
        <p className="text-sm">E-Mail: zorigo.dev@proton.me</p>
      </div>
    </div>
  );
}
