import { Campo } from "./style"

const Formulario = () => (
  <>
    <main>
      <h2>Adicionar Novo Contato</h2>
      <form>
        <Campo type="text" placeholder="Nome Completo" required />
        <Campo type="email" placeholder="Email" required />
        <Campo type="tel" placeholder="Telefone" required />
      </form>
    </main>
  </>
)

export default Formulario
