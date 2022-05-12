import React from 'react';
import './App.css';
import Home from './pages/home/Home'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import { Provider } from 'react-redux';
import store from './store/store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';


function App() {
  return(
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<CadastroUsuario />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/criarCategoria" element={<CadastroCategoria />} />
            <Route path="/criarCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletar-categoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
    );
    
}

export default App;
