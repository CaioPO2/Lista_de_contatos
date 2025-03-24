import { Campo, Container, Botao, SubTitulo } from './style'

const Formulario = () => (
  <>
    <Container>
      <SubTitulo>Adicionar Novo Contato</SubTitulo>
      <form>
        <Campo type="text" placeholder="Nome Completo" required />
        <Campo type="email" placeholder="Email" required />
        <Campo type="tel" placeholder="Telefone" required />
      </form>
      <Botao>Adicionar</Botao>
    </Container>
  </>
)

export default Formulario
