<div align="center">

# 📦 Mini Gerenciador de Estoque

<p>
  <img src="https://img.shields.io/badge/Python-3.12-blue?style=for-the-badge&logo=python">
  <img src="https://img.shields.io/badge/FastAPI-Backend-green?style=for-the-badge&logo=fastapi">
  <img src="https://img.shields.io/badge/MySQL-Database-orange?style=for-the-badge&logo=mysql">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge">
</p>

</div>

---

# 📖 Sobre o Projeto

Este projeto é um simples gerenciador de estoque desenvolvido com o objetivo de praticar desenvolvimento backend e integração entre frontend e backend.

O principal foco do projeto foi aprender como conectar uma interface frontend com uma API backend desenvolvida por mim utilizando Python e FastAPI.

O frontend da aplicação foi criado com auxílio de ferramentas de IA, enquanto toda a lógica do backend, rotas, integração com banco de dados e estrutura da API foram desenvolvidas por mim.

A aplicação permite realizar operações básicas de gerenciamento de produtos, como listar, cadastrar e remover produtos.

---

# 🚀 Tecnologias Utilizadas

- Python
- FastAPI
- MySQL
- HTML / CSS / JavaScript
- Docker (Opcional)
- Frontend gerado com auxílio de IA

---

# 🔗 Funcionalidades da API

## GET `/products`
Lista todos os produtos cadastrados.

### Exemplo de Resposta

```json
[
  {
    "id": 1,
    "name": "Teclado",
    "price": 150.90,
    "description": "Teclado mecânico"
  }
]
```

---

## POST `/products`
Cadastra um novo produto.

### Corpo da Requisição

```json
{
  "name": "Mouse",
  "price": 99.90,
  "description": "Mouse sem fio"
}
```

---

## DELETE `/products/{id}`
Remove um produto pelo ID.

### Exemplo

```http
DELETE /products/1
```

---

# 🛠️ Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Crie um ambiente virtual:

```bash
python -m venv venv
```

Ative o ambiente virtual:

### Linux/macOS

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

---

# ▶️ Executando o Projeto

Inicie o servidor FastAPI:

```bash
uvicorn app.main:app --reload
```

Acesse a documentação automática da API:

```bash
http://127.0.0.1:8000/docs
```

---

# 🎯 Objetivos de Aprendizado

Este mini projeto foi criado para praticar:

- Desenvolvimento de APIs REST
- Fundamentos do FastAPI
- Comunicação entre frontend e backend
- Operações CRUD
- Integração com banco de dados
- Organização de rotas
- Tratamento de requisições e respostas

---

# 👨‍💻 Autor

Desenvolvido por Luis Filippe Reis Nogueira.
