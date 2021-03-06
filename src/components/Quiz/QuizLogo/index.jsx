import styled from 'styled-components';
import Image from 'next/image'
import logo from '../../../assets/logo.png';

function Logo() {
  return (
    <>
      <Image 
        src={logo}
        primary="true"
        width={200}
        height={74}
        alt="Hub Quiz"
      />
    </>
  );
}

 
const QuizLogo = styled(Logo)`
  primary: true;
  margin: auto;
  /* display: block; */
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
