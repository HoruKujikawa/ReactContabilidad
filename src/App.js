import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Header } from './componentes/Header.js';
import FromVentas from './page/pedido/fromVentas.js';
import Listpersonas from './page/usuarios/Listpersonas.js';
import ListMarcas from './page/marca/ListMarcas.js';
import ListRoles from './page/rol/ListRoles.js';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
function App() {
  return (
    <PrimeReactProvider>
    <>
    <div>
      <Header/>
    </div>
    <div className="App">
      <Routes>
        <Route path='/' element={<Listpersonas/>}/>
        <Route path='/Ventas' element={<FromVentas/>}/>
        <Route path='/Marcas' element={<ListMarcas/>}/>
        <Route path='/Roles' element={<ListRoles/>}/>
      </Routes>
    </div>
    </>
    </PrimeReactProvider>
  );
}

export default App;
