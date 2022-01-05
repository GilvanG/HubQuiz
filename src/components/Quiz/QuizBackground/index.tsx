import styled from 'styled-components';
interface BackgroundQProp{
  backgroundImage: string
}

const QuizBackground = styled.div.attrs((backgroundImage: BackgroundQProp)=> { 
  backgroundImage})<BackgroundQProp>`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image:
    linear-gradient(rgba(255,255,255,0.4) 20%,rgba(153,153,153,0.8) 30%, rgba(0,153,255,0.5) 100%), 
    url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
