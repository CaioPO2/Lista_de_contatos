import { useState } from 'react'

type Props = {
  nome: string
  email: string
  telefone: string
}

const Contato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <div>
      <span>{nome}</span>
      <span>{email}</span>
      <span>{telefone}</span>
      {estaEditando ? (
        <>
          <button type="button">Salvar</button>
          <button onClick={() => setEstaEditando(false)} type="button">
            Cancelar
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setEstaEditando(true)} type="button">
            Editar
          </button>
          <button type="button">Deletar</button>
        </>
      )}
    </div>
  )
}

export default Contato
