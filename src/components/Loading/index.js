/* eslint-disable linebreak-style */
import { useLottie } from 'lottie-react';
import loadingAnimation from '../../assets/animations/loading.json';

const Example = () => {
  const options = {
    animationData: loadingAnimation,
    loop: true,
    autoplay: true,
    width: 10,
    style: {
      width: '100%',
      height: '150px',
    },
  };

  const { View } = useLottie(options);

  return View;
};

export default Example;
