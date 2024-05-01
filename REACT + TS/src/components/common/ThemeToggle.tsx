import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';
import { useRecoilState } from 'recoil';
import { themeState } from '@/types/Recoil';

export default function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="flex items-center gap-1">
      {theme === 'light' ? <Sun /> : <Moon />}
      <span className="hidden xl:block">THEME</span>
    </button>
  );
}
