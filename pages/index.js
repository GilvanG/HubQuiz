/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import db from '../db.json';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const [name, setName] = React.useState('');
  const router = useRouter();

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{
            delay: 0,
            duration: 0.5,
          }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '-100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`quiz?name=${name}`);
            }}
            >
              <Input
                name="Nome de Usuario"
                value={name}
                Change={(event) => {
                  setName(event.target.value);
                }}
                inText="Olá, Qual o seu Nome?"
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          variants={{
            show: { opacity: 1, x: '0' },
            hidden: { opacity: 0, x: '-100%' },
          }}
          initial="hidden"
          animate="show"
        >
          { name.length > 0
          && [0].map(() => (
            <Widget.Content
              as={motion.section}
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.5,
                duration: 1.5,
              }}
            >
              <h1>Quizes da Galera</h1>
              <ul>
                {db.external.map((linkExt) => {
                  const labelLink = linkExt
                    .replace('https://', '')
                    .replace('vercel.app', '')
                    .replace('/', '')
                    .split('.');
                  return (
                    <li key={linkExt}>
                      <Widget.Topic href={`/quiz/${labelLink[0]}___${labelLink[1]}`}>
                        {labelLink[0]}
                        /
                        {labelLink[1]}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          ))}
          <Footer />
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gilvang" />
    </QuizBackground>
  );
}
