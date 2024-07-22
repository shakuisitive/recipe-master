import { useTheme } from "../hooks/useTheme";
import "./ThemeSelector.css";
import modeIcon from "../assets/mode-icon.svg";
const themeColors = ["#58249c", "#249c6b", "#b70233"];
function ThemeSelector() {
  let { changeColor, mode, changeMode } = useTheme();

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={() => {
            changeMode(mode === "dark" ? "light" : "dark");
            console.log(mode);
          }}
          src={modeIcon}
          alt="dark or light mode toggle button"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            onClick={() => {
              changeColor(color);
            }}
            key={color}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
