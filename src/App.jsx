import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import AuthLayout from './layouts/AuthLayout';
import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlvidePassword from './paginas/OlvidePassword';
import NuevoPassword from './paginas/NuevoPassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';

function App() {
  return (
     <BrowserRouter>
     {/**Es para proteger rutas */}
      <Routes>
        {/**Area de acceso publica */}
        <Route path='/' element={<AuthLayout />}>
          {/**index cargar */}
          <Route index element={<Login />}/>
          <Route path='registrar' element={<Registrar />}/>
          <Route path='olvide-password' element={<OlvidePassword/>}/>
          <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
          <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>
        </Route>
        {/**Area de acceso privada */}
      </Routes>
     </BrowserRouter>
  )
}

export default App
