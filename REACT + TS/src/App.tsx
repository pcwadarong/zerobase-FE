import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import Router from './router/router';
import LoadingIndicator from './components/ui/LoadingIndicator';
import { isLoadingAtom } from './types/Recoil';
//import { themeAtom } from './types/Recoil';

export default function App(): JSX.Element {
  const isLoading = useRecoilValue(isLoadingAtom);
  const setLoading = useSetRecoilState(isLoadingAtom);
  //const isLight = useRecoilValue(themeAtom);

  useEffect(() => {
    const setLoadingComplete = () => setLoading(false);
    setLoadingComplete();
  }, [setLoading]);

  return isLoading ? <LoadingIndicator /> : <Router />;
}
