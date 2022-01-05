import { useLottie } from 'lottie-react';
import loading from '../../assets/animations/loading2.json';

const LoadingAnimation = () => {
  const options = {
    animationData: loading,
    loop: true,
    autoplay: true,
    width: 100,
    style: {
      width: '100rem',
      height: '100%',
    },
  };

  const { View } = useLottie(options);

  return View;
};

export default LoadingAnimation;
