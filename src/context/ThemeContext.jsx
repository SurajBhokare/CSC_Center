import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext({ theme: "dark", setTheme: () => {}, toggleTheme: () => {} });

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  // normalize theme values to either 'light' or 'dark'
  const normalize = (t) => (t === "light" ? "light" : "dark");

  const setTheme = (t) => {
    setThemeState((_) => normalize(t));
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const n = normalize(theme);
    document.body.setAttribute("data-theme", n);
    try {
      localStorage.setItem("theme", n);
    } catch (e) {
      // ignore localStorage errors (e.g., private mode)
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};