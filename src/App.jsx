import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://127.0.0.1:8000/produtos';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    descricao: ''
  });

  // 1. Listagem (GET)
  const carregarProdutos = async () => {
    try {
      const response = await fetch(API_URL + '/');
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  // Criar Produto (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(API_URL + '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          preco: parseFloat(formData.preco)
        })
      });
      setFormData({ nome: '', preco: '', descricao: '' });
      carregarProdutos(); // Recarrega a lista
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  // Deletar Produto (DELETE)
  const deletarProduto = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      carregarProdutos(); // Recarrega a lista
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  return (
    <div className="container">
      <h1>Gerenciador de Estoque</h1>

      {/* Formulário de Cadastro */}
      <div className="form-section">
        <h2>Adicionar Novo Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input 
              type="text" 
              value={formData.nome} 
              onChange={(e) => setFormData({...formData, nome: e.target.value})} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Preço:</label>
            <input 
              type="number" 
              step="0.01" 
              value={formData.preco} 
              onChange={(e) => setFormData({...formData, preco: e.target.value})} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Descrição:</label>
            <textarea 
              value={formData.descricao} 
              onChange={(e) => setFormData({...formData, descricao: e.target.value})} 
              required 
            />
          </div>
          <button type="submit" className="btn-add">Salvar Produto</button>
        </form>
      </div>

      {/* Listagem de Produtos */}
      <div className="list-section">
        <h2>Lista de Produtos</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>R$ {parseFloat(p.preco).toFixed(2)}</td>
                <td>{p.descricao}</td>
                <td>
                  <button onClick={() => deletarProduto(p.id)} className="btn-delete">
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
