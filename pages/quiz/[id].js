/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExt }) {
  return (
    <div style={
      { color: '#f0f0f0' }
    }
    >
      <ThemeProvider theme={dbExt.theme}>
        {/* Desafio da próxima aula junto com as animações
        <pre style={{color: 'black' }}>
          {JSON.stringify(dbExt.questions, null, 4)}
        </pre> */}
        <QuizScreen externalQuestions={dbExt.questions} externalBg={dbExt.bg} />
      </ThemeProvider>
    </div>
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitUser] = context.query.id.split('___');
  try {
    const dbExt = await fetch(`https://${projectName}.${gitUser}.vercel.app/api/db`)
      .then((answerServer) => {
        if (answerServer.ok) {
          return answerServer.json();
        }
        throw new Error('Falha ao obter dados');
      })
      .then((answerConvert) => answerConvert);
      // .catch((err) => {
      //   console.log(err);
      // });
    return {
      props: {
        dbExt,
      }, // will be passed to the page component as props
    };
  } catch (err) {
    throw new Error('Ops', err);
  }
}
