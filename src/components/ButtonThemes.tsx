import { FiSun, FiMoon } from "react-icons/fi";

interface HeaderProps {
  handleDarkTheme: () => void;
  darkTheme: string;
}

export function ButtonThemes({ handleDarkTheme, darkTheme }: HeaderProps) {
  return (
    <button
      className="text-gray-600 dark:text-white
      p-2 absolute top-6 right-6
      border-[1px] rounded-md border-dashed border-gray-600 dark:border-white
      md:top-10 md:right-12"
      onClick={handleDarkTheme}
    >
      {darkTheme === "dark" ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}
