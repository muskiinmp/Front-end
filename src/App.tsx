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


function App() {
  return(
    <Provider store={store}>
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
            <Route path="/atualizar-categoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletar-categoria/:id" element={<CadastroCategoria />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
    );
    
}

export default App;
