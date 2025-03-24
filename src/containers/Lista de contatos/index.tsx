import Contato from '../../components/contato'

const contatos = [
  {
    nome: 'Caio Cesar',
    email: 'caio@gmail.com',
    telefone: '11235654'
  },
  {
    nome: 'Caio Cesar',
    email: 'caio@gmail.com',
    telefone: '11235654'
  }
]

const ListaDeContatos = () => (
  <ul>
    {contatos.map((t) => (
      <li key={}>
        <Contato nome={t.nome} email={t.email} telefone={t.telefone} />
      </li>
    ))}
  </ul>
)

export default ListaDeContatos
