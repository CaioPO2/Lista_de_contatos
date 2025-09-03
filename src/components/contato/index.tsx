import { useState } from 'react'
import {
  InputContato,
  BotaoContatoEditar,
  BotaoContatoDeletarECancelar,
  BotaoContatoSalvar,
  ContainerContato,
  Item
} from './style'

import { remover } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <ContainerContato>
      {estaEditando ? (
        <>
          <Item>
            <InputContato>{nome}</InputContato>
          </Item>
          <Item>
            <InputContato>{email}</InputContato>
          </Item>
          <Item>
            <InputContato>{telefone}</InputContato>
          </Item>
          <BotaoContatoSalvar type="button">Salvar</BotaoContatoSalvar>
          <BotaoContatoDeletarECancelar
            onClick={() => setEstaEditando(false)}
            type="button"
          >
            Cancelar
          </BotaoContatoDeletarECancelar>
        </>
      ) : (
        <>
          <Item>
            <InputContato disabled>{nome}</InputContato>
          </Item>
          <Item>
            <InputContato disabled>{email}</InputContato>
          </Item>
          <Item>
            <InputContato disabled>{telefone}</InputContato>
          </Item>
          <BotaoContatoEditar
            onClick={() => setEstaEditando(true)}
            type="button"
          >
            Editar
          </BotaoContatoEditar>
          <BotaoContatoDeletarECancelar
            onClick={() => dispatch(remover(id))}
            type="button"
          >
            Deletar
          </BotaoContatoDeletarECancelar>
        </>
      )}
    </ContainerContato>
  )
}

export default Contato
