import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='jogue com a sua turma' />
    </Container>
  );
}

