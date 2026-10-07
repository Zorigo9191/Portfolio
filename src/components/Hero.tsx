// import VectorWordmark from "./parts/vectorWordMark";

// export default function Hero() {
//   return (
//     <div className="w-full flex justify-center px-4 mt-6 mx-auto md:max-w-150 lg:max-w-2/3">
//       <VectorWordmark
//         text="TECH STACK : HTML  *  CSS  * JavaScript *  TypeScript *  React  * Tailwind * Node.js * Supabase * MongoDB"
//         font={{
//           fontFamily: "Poppins",
//           fontWeight: 800,
//           fontSize: "20px",
//           lineHeight: "1em",
//           letterSpacing: "-0.01em",
//           textAlign: "left",
//         }}
//         background="#181717"
//         textColor="#3EDED3"
//         shade="#5CD2CC"
//         accent="#3EDED3"
//         reach={120}
//         speed={45}
//         damping={45}
//         handles={{ size: 70, spread: 54, labels: true }}
//         style={{ height: "140px", borderRadius: "12px" }}
//       />
//     </div>
//   );
// }

import VectorWordmark from "./parts/vectorWordMark";

export default function Hero() {
  return (
    <div className="w-full flex justify-center mt-6">
      <VectorWordmark
        text="TECH STACK : HTML  *  CSS  * JavaScript *  TypeScript *  React  * Tailwind * Node.js * Supabase * MongoDB"
        font={{
          fontFamily: "Poppins",
          fontWeight: 800,
          fontSize: "20px",
          lineHeight: "1em",
          letterSpacing: "-0.01em",
          textAlign: "left",
        }}
        background="transparent"
        textColor="#3EDED3"
        shade="#5CD2CC"
        accent="#3EDED366"
        reach={120}
        speed={45}
        damping={45}
        handles={{ size: 70, spread: 54, labels: false }}
        style={{ height: "140px", borderRadius: "12px" }}
      />
    </div>
  );
}
