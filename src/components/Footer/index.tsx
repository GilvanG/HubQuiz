import styled from 'styled-components';
import Image from 'next/image';
import me from '../../assets/me.png';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  /* padding: 20px; */
  display: flex;
  align-items: center;
  //border-radius: 4px; 
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <span
        style={{marginTop:10}}
      >
        <Image
          width={80}
          height={70.33}
          src={me} 
          alt="Gilvan"
        />
      </span>
      <p>
        Orgulhosamente desenvolvido por:
        {' '}
        <a href="https://www.github.com/gilvang">
          <span>Gilvan Gomes</span>
        </a>

      </p>
    </FooterWrapper>
  );
}
