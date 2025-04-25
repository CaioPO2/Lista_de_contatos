import EstiloGlobal from './styles'

import Formulario from './containers/formulario'
import ListaDeContatos from './containers/Lista de contatos'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <h1>Lista de Contatos</h1>
      <Formulario />
      <ListaDeContatos />
    </Provider>
  )
}

export default App
