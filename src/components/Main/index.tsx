import * as S from './styles';

const Main = ({ title = 'Spada - Boilerplate', description = 'A simple TypeScript React project' }) => {
  return (
    <S.Wrapper>
      <S.Logo src='/vercel.svg' alt='vercel logo' />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration src='/next.svg' alt='nextjs logo' />
    </S.Wrapper>
  );
};

export default Main;
