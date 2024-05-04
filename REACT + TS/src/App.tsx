import { useEffect } from 'react';
import Router from './router/router';
import LoadingIndicator from './components/ui/LoadingIndicator';
import { useRecoilState } from 'recoil';
import { isLoadingAtom, themeState } from './types/Recoil';

export default function App(): JSX.Element {
  const [isLoading, setLoading] = useRecoilState(isLoadingAtom);
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) setTheme(storedTheme);
    else setTheme(theme);

    const setLoadingComplete = () => setLoading(false);
    setLoadingComplete();
  }, [setLoading, setTheme, theme]);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {isLoading ? <LoadingIndicator /> : <Router />}
    </div>
  );
}
