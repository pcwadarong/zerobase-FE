import BarLoader from 'react-spinners/BarLoader';

const LoadingIndicator = ({ color = '#282828' }) => (
    <div className="w-screen h-screen flex items-center justify-center">
      <BarLoader color={color} />
    </div>
  );

  export default LoadingIndicator;