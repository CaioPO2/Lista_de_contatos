import { useSelector } from 'react-redux'
import Contato from '../../components/contato'
import { ContainerLista, Lista, ContatoLista, SpanLista } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <>
      <ContainerLista>
        <SpanLista>Nome</SpanLista>
        <SpanLista>E-mail</SpanLista>
        <SpanLista>Telefone</SpanLista>
        <Lista>
          {itens.map((t) => (
            <ContatoLista key={t.id}>
              <Contato
                id={t.id}
                nome={t.nome}
                email={t.email}
                telefone={t.telefone}
              />
            </ContatoLista>
          ))}
        </Lista>
      </ContainerLista>
    </>
  )
}

export default ListaDeContatos
