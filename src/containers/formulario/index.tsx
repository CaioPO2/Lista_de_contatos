import { useDispatch } from 'react-redux'
import { Campo, Container, Botao, SubTitulo } from './style'
import { FormEvent, useState } from 'react'
import Contato from '../../models/Contato'
import { adicionar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(9, nome, email, telefone)

    dispatch(adicionar(contatoParaAdicionar))
  }

  return (
    <>
      <Container>
        <SubTitulo>Adicionar Novo Contato</SubTitulo>
        <form onSubmit={adicionarContato}>
          <Campo
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            type="text"
            placeholder="Nome Completo"
            required
          />
          <Campo
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <Campo
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
            type="tel"
            placeholder="Telefone"
            required
          />
          <Botao type="submit">Adicionar</Botao>
        </form>
      </Container>
    </>
  )
}

export default Formulario
