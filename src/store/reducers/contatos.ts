import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Caio Cesar',
      email: 'caio@gmail.com',
      telefone: '11987654321'
    },
    {
      id: 2,
      nome: 'Andre Silva',
      email: 'andre@gmail.com',
      telefone: '11987654311'
    },
    {
      id: 3,
      nome: 'Paula Oliveira',
      email: 'paula@gmail.com',
      telefone: '11987654322'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    adicionar: (state, action: PayloadAction<Contato>) => {
      const ContatoJaExiste = state.itens.find(
        (contato) => contato.telefone === action.payload.telefone
      )

      if (ContatoJaExiste) {
        alert('Esse número ja foi adicionado')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, adicionar } = contatosSlice.actions

export default contatosSlice.reducer
