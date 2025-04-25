import { useState } from 'react'
import {
  SpanContato,
  BotaoContatoEditar,
  BotaoContatoDeletarECancelar,
  BotaoContatoSalvar
} from './style'

import { remover } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <div>
      <SpanContato>{nome}</SpanContato>
      <SpanContato>{email}</SpanContato>
      <SpanContato>{telefone}</SpanContato>
      {estaEditando ? (
        <>
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
    </div>
  )
}

export default Contato
