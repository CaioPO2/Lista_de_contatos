import EstiloGlobal from './styles'

import Formulario from './containers/formulario'
import ListaDeContatos from './containers/Lista de contatos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <h1>Lista de Contatos</h1>
      <Formulario />
      <ListaDeContatos />
    </>
  )
}

export default App
