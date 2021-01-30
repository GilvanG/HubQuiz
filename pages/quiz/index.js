/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import db from '../../db.json';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizPage() {
  return (
    <QuizScreen externalQuestions={db.questions} externalBg={db.bg} />
  );
}
