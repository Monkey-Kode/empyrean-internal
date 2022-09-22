import Lottie from 'react-lottie';
// import s from './ChartLottie.module.css';
import animationData from '../../../public/data.json';
const ChartLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Lottie
      style={{
        background: 'transparent',
        width: '100%',
        height: 'auto',
        display: 'block',
        textAlign: 'center',
        opacity: 1,
        transform: 'translate3d(0,0,0)',
      }}
      options={defaultOptions}
      height={640}
      width={328}
    />
  );
};

export default ChartLottie;
