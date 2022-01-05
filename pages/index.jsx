import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import db from '../db.json';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/Quiz/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/Quiz/QuizContainer';
import QuizBackground from '../src/components/Quiz/QuizBackground';

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
                {`Jogar`}
              </Button>
            </form>
            <p style={{
              color: "#555555",
              fontSize: 11,
              fontWeight: 400,
              alignItems: 'center',
              justifyContent:'center'
            }}>
              Se estar na dúvidas das vantagens da HubLocal, venha particpar deste pequeno quiz!</p>
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

          <Footer />
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gilvang" />
    </QuizBackground>
  );
}
