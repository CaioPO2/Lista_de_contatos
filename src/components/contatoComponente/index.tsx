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
import { editar } from '../../store/reducers/contatos'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const ContatoComponente = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const [novoNome, setNovoNome] = useState(nome)
  const [novoEmail, setNovoEmail] = useState(email)
  const [novoTelefone, setNovoTelefone] = useState(telefone)

  const salvarEdicao = () => {
    dispatch(editar(new ContatoClass(id, novoNome, novoEmail, novoTelefone)))
    setEstaEditando(false)
  }
  return (
    <ContainerContato>
      {estaEditando ? (
        <>
          <Item>
            <InputContato
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
            />
          </Item>
          <Item>
            <InputContato
              value={novoEmail}
              onChange={(e) => setNovoEmail(e.target.value)}
            />
          </Item>
          <Item>
            <InputContato
              value={novoTelefone}
              onChange={(e) => setNovoTelefone(e.target.value)}
            />
          </Item>
          <BotaoContatoSalvar type="button" onClick={salvarEdicao}>
            Salvar
          </BotaoContatoSalvar>
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

export default ContatoComponente
