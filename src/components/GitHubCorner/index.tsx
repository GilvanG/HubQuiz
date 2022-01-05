import styled from 'styled-components';
import AnimationGit from './AnimationGit';

const Wrapper = styled.div`
  padding: 0.6rem;
  margin: 0.8rem; 
  border-radius: 12px 12px 0px 12px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  bottom: 0;
  border: 0;
  right: 0;
  z-index: 20;
  &:hover,
    &:focus {
      opacity: .7;
    }
`;

interface GitHubCornerProp {
  projectUrl: string; 
}

export default function GitHubCorner({ projectUrl }: GitHubCornerProp) {
  return (
    <a 
      href={projectUrl} 
      target="_blank" 
      rel="noreferrer" 
      style={{backgroundColor: 'white'}}>
      <Wrapper>
        <AnimationGit />
      </Wrapper>
    </a>
  );
}
