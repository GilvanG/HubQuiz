/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import db from '../../db.json';
import Button from '../../src/components/Button';
import Widget from '../../src/components/Widget';
import QuizLogo from '../../src/components/QuizLogo';
import AlternativesForm from '../../src/components/AlternativesForm';
import QuizContainer from '../../src/components/QuizContainer';
import QuizBackground from '../../src/components/QuizBackground';
import BackLinkArrow from '../../src/components/BackLinkArrow';

function ResultWidget({ resultQuestions }) {
  const imgResult = 'https://media.giphy.com/media/dI4C6ZhNb3FBK/giphy.gif';
  return (
    <Widget>
      <Widget.Header>
        {/* {resultQuestions.reduce((somatorio, resultQuestionI) => {
          if (resultQuestionI === true) {
            return somatorio + 1;
          }
          return somatorio;
        }, 0)} */}
        {resultQuestions.filter((x) => x).length}
        {' '}
        de
        {' '}
        {resultQuestions.length}
      </Widget.Header>
      {(resultQuestions.filter((x) => x).length < resultQuestions.length / 2) ? (
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src="https://media.giphy.com/media/68SKB1h2AJwd2/giphy.gif"
        />
      ) : (
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src={imgResult}
        />
      )}
      <Widget.Content>
        <ul>
          {resultQuestions.map((result, index) => (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={`result_${index}`}
            >
              #
              {index + 1}
              {' '}
              - Resultado:
              {result === true
                ? ' Acertou'
                : ' Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResultQuestion,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `questioelectedAlternativen_${questionIndex}`;
  const isCorrect = selectedAlternative === `${question.answer}`;
  const hasSelectedAlternative = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            addResultQuestion(isCorrect);
            setTimeout(() => {
              onSubmit();
              setSelectedAlternative(undefined);
              setIsQuestionSubmited(false);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `${alternativeIndex}`;
            const Status = isCorrect ? 'SUCCESS' : 'ERROR';
            // eslint-disable-next-line eqeqeq
            const isSelected = selectedAlternative == alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && Status}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeId)}
                  type="radio"
                  disabled={isQuestionSubmited}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit" disabled={!hasSelectedAlternative}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect
          && <p>você acertou</p>}
          {isQuestionSubmited && !isCorrect
          && <p>você errou</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;
  const question = db.questions[questionIndex];
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [resultQuestions, setResultQuestions] = React.useState([]);

  function addResultQuestion(result) {
    setResultQuestions([
      ...resultQuestions,
      result,
    ]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // nasce === didMount
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2 * 1000);
    // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResultQuestion={addResultQuestion}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget resultQuestions={resultQuestions} />}
      </QuizContainer>
    </QuizBackground>
  );
}
