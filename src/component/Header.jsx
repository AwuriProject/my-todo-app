import { useDarkMode } from "../DarkMode";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="header dark:bg-[#0a1f44]">
      <h1>
        {" "}
        <EditNoteIcon fontSize="200" /> My Todo App
      </h1>
      <div className="cursor-pointer text-white" onClick={toggleDarkMode}>
        {darkMode ? (
          <ToggleOnIcon fontSize="large" />
        ) : (
          <ToggleOffIcon fontSize="large" />
        )}
      </div>
    </header>
  );
};

export default Header;
