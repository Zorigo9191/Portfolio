// import { Link, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// export default function Footer() {
//   const { pathname } = useLocation();
//   const isImpressum = pathname === "/impressum";

//   return (
//     <div className="flex w-full justify-center items-center px-4 mt-10 mx-auto md:max-w-150 lg:max-w-2/3 text-slate-200 h-12 gap-6 bg-slate-800 rounded-sm">
//       <Link
//         to={isImpressum ? "/" : "/impressum"}
//         className={
//           isImpressum
//             ? "inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium bg-slate-700 hover:bg-slate-500 text-white transition"
//             : "flex hover:text-blue-400 transition font-light text-sm"
//         }
//       >
//         {isImpressum && <ArrowLeft className="h-4 w-4" />}
//         {isImpressum ? "Zurück" : "Impressum"}
//       </Link>

//       <p className="flex font-light text-sm">©Zorigo 2026</p>
//     </div>
//   );
// }

import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Footer() {
  const { pathname } = useLocation();
  const isImpressum = pathname === "/impressum";

  return (
    <div className="flex w-full justify-center items-center mt-10 text-slate-200 h-12 gap-6 bg-slate-800 rounded-sm">
      <Link
        to={isImpressum ? "/" : "/impressum"}
        className={
          isImpressum
            ? "inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium bg-slate-700 hover:bg-slate-500 text-white transition"
            : "flex hover:text-blue-400 transition font-light text-sm"
        }
      >
        {isImpressum && <ArrowLeft className="h-4 w-4" />}
        {isImpressum ? "Zurück" : "Impressum"}
      </Link>

      <p className="flex font-light text-sm">©Zorigo 2026</p>
    </div>
  );
}
