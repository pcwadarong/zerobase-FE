import { atom, useSetRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import Router from './router/router';
import BarLoader from 'react-spinners/BarLoader';

const isLoadingAtom = atom({
  key: 'isLoadingAtom',
  default: true,
});

export default function App(): JSX.Element {
  const isLoading = useRecoilValue(isLoadingAtom);
  const setLoading = useSetRecoilState(isLoadingAtom);

  useEffect(() => {
    const setLoadingComplete = () => setLoading(false);
    setLoadingComplete();
    //setLoading(true);z
  }, [setLoading]);

  return isLoading ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <BarLoader color="#282828"/>
    </div>
  ) : (
    <Router />
  );
}