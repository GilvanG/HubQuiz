import { useLottie } from 'lottie-react';
import git from '../../assets/animations/git2.json';

const AnimationGit = () => {
  const options = {
    animationData: git,
    loop: true,
    autoplay: true,
    width: 10,
    style: {
      width: '100%',
      height: '45px',
    },
  };

  const { View } = useLottie(options);

  return View;
};

export default AnimationGit;
