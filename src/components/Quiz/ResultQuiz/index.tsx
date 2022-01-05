import React, {useEffect, useState} from 'react';
import Widget from '../../Widget';
import BackLinkArrow from '../../BackLinkArrow';

interface ResultQuizProp{
  resultQuestions: Array<boolean>,
}

const ResultQuiz:React.FC<ResultQuizProp> = ({resultQuestions}: ResultQuizProp ): JSX.Element =>  {
  const [mensage, setMensage] = useState("");
  const [image, setImage] = useState('');
  useEffect(() => {
    const questionsCorrects = resultQuestions.filter((x) => x).length;
      if (questionsCorrects == resultQuestions.length){
        setMensage("Parabêns");
        setImage('https://media.giphy.com/media/g9582DNuQppxC/giphy-downsized-large.gif');
      }else if(questionsCorrects >= resultQuestions.length/2){
        setMensage("Foi Quase");
        setImage("https://media.giphy.com/media/ZFTKZ8zwj38gE/giphy.gif");
      }else{
        setMensage("Que Pena");
        setImage("https://media.giphy.com/media/3o6wrebnKWmvx4ZBio/giphy.gif");
      }  
  }, []);
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        {mensage}! 
        
      </Widget.Header>
      <img
        alt="Gif Resultado"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
        src={image}
      />
      <Widget.Content>
        <p style={{fontSize:'1.5rem'}}>
          Você Acertou {resultQuestions.filter((x) => x).length} 
          {' '}
          de
          {' '}
          {resultQuestions.length}
        </p>
        <p>Depois de ver tantas vantagens sobre a HubLocal, ainda tem dúvidas?</p>
        <ul>
          {resultQuestions.map((result, index) => (
            <li
              key={`result_${index}`}
            >
              <b>
                {index + 1}ª
                {' '}
                - Resultado:
              </b>
              {result === true
                ? ' Acertou✔️' 
                : ' Errou❌'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default ResultQuiz;
