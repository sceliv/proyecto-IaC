import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Libros from './pages/libros/Index';
import Usuarios from './pages/usuarios/Index';
import Prestamos from './pages/prestamos/Index';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas con PrivateRoute */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/libros"
          element={
            <PrivateRoute>
              <Libros />
            </PrivateRoute>
          }
        />
        <Route
          path="/usuarios"
          element={
            <PrivateRoute>
              <Usuarios />
            </PrivateRoute>
          }
        />
        <Route
          path="/prestamos"
          element={
            <PrivateRoute>
              <Prestamos />
            </PrivateRoute>
          }
        />

        {/* Fallback a login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
