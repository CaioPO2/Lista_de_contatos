import Contato from '../../components/contato'
import { ContainerLista, Lista, ContatoLista, SpanLista } from './styles'

const contatos = [
  {
    id: 1,
    nome: 'Caio Cesar',
    email: 'caio@gmail.com',
    telefone: '11235654'
  },
  {
    id: 2,
    nome: 'André Silva',
    email: 'andre@gmail.com',
    telefone: '11235659'
  }
]

const ListaDeContatos = () => (
  <>
    <ContainerLista>
      <SpanLista>Nome</SpanLista>
      <SpanLista>E-mail</SpanLista>
      <SpanLista>Telefone</SpanLista>
      <Lista>
        {contatos.map((t) => (
          <ContatoLista key={t.id}>
            <Contato nome={t.nome} email={t.email} telefone={t.telefone} />
          </ContatoLista>
        ))}
      </Lista>
    </ContainerLista>
  </>
)

export default ListaDeContatos
