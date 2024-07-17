import { createContext, useState } from "react";

const themes = {
  ligh: {
    bg: "",
    text: "",
  },
  dark: {
    bg: "",
    text: "",
  },
};

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => {
    themes;
  },
});

// export default function ThemeProvide(props) {
//     const [theme, setTheme] = useState("light");
//     return (
//         <>
//             <ThemeContext.Provider>
//         </>
//     )
// }