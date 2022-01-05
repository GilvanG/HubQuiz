import styled from 'styled-components';

const InputBasic = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

interface InputProp {
  Change: VoidFunction,
  inText: string;
  name: string;
  value: string;
}

export default function Input({ Change, inText, ...props }: InputProp) {
  return (
    <div>
      <InputBasic
        onChange={Change}
        placeholder={inText}
        {...props}
      />
    </div>
  );
}

