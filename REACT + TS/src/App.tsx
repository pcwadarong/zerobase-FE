import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import Router from './router/router';
import LoadingIndicator from './components/common/LoadingIndicator';
import { isLoadingAtom } from './components/store/loading';
//import { themeAtom } from './components/store/theme';

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