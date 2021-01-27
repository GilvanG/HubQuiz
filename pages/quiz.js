/* eslint-disable linebreak-style */
import React from 'react';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';

export default function Quiz() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      quiz
    </QuizBackground>
  );
}
