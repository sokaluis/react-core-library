import { useDarkMode } from "hooks";
import "theme/hooks.theme.css";

const DarkModeExample = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode((prevDarkMode: string) => !prevDarkMode)}
      style={{
        border: `1px solid ${darkMode ? "white" : "black"}`,
        background: "none",
        color: darkMode ? "white" : "black",
      }}
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeExample;
