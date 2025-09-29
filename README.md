# API de Cadastro de Usuários

API REST desenvolvida com Node.js, Express, SQLite e Sequelize para gerenciamento de usuários.

## 📋 Estrutura do Projeto

```
project/
│
├── controller/
│   ├── CadastroUsuario.controller.js
│   ├── ListarUsuario.controller.js
│   └── BuscarUsuario.controller.js
│
├── service/
│   ├── CadastroUsuario.service.js
│   ├── ListarUsuario.service.js
│   └── BuscarUsuario.service.js
│
├── repository/
│   └── Conexao.js
│
├── routes.js
├── server.js
├── package.json
└── database.sqlite (criado automaticamente)
```

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm start
```

Ou para desenvolvimento com auto-reload:
```bash
npm run dev
```

## 📡 Rotas da API

### 1. Cadastrar Usuário
**POST** `http://localhost:3000/usuarios`

**Body:**
```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

**Resposta de Sucesso (201):**
```json
{
  "mensagem": "Usuário cadastrado com sucesso",
  "usuario": {
    "id": "uuid-gerado",
    "nome": "João Silva",
    "email": "joao@email.com",
    "data_criacao": "2025-09-29T12:00:00.000Z"
  }
}
```

### 2. Listar Todos os Usuários
**GET** `http://localhost:3000/usuarios`

**Resposta de Sucesso (200):**
```json
{
  "total": 2,
  "usuarios": [
    {
      "id": "uuid-1",
      "nome": "João Silva",
      "email": "joao@email.com",
      "data_criacao": "2025-09-29T12:00:00.000Z"
    },
    {
      "id": "uuid-2",
      "nome": "Maria Santos",
      "email": "maria@email.com",
      "data_criacao": "2025-09-29T11:00:00.000Z"
    }
  ]
}
```

### 3. Buscar Usuário por ID
**GET** `http://localhost:3000/usuarios/:id`

**Resposta de Sucesso (200):**
```json
{
  "usuario": {
    "id": "uuid-1",
    "nome": "João Silva",
    "email": "joao@email.com",
    "data_criacao": "2025-09-29T12:00:00.000Z"
  }
}
```

**Resposta de Erro (404):**
```json
{
  "erro": "Usuário não encontrado"
}
```

## ✅ Validações Implementadas

- ✓ Validação de email (formato válido)
- ✓ Verificação de email duplicado
- ✓ Campos obrigatórios (nome e email)
- ✓ Tratamento de erro quando usuário não é encontrado
- ✓ Geração automática de UUID
- ✓ Timestamp automático na criação

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- SQLite3
- Sequelize ORM
- UUID

## 📝 Exemplos de Teste

### Usando cURL:

```bash
# Cadastrar usuário
curl -X POST http://localhost:3000/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","email":"joao@email.com"}'

# Listar usuários
curl http://localhost:3000/api/usuarios

# Buscar usuário por ID
curl http://localhost:3000/api/usuarios/{id-do-usuario}
```

### Usando JavaScript (fetch):

```javascript
// Cadastrar usuário
fetch('http://localhost:3000/api/usuarios', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nome: 'João Silva',
    email: 'joao@email.com'
  })
})
.then(res => res.json())
.then(data => console.log(data));
```
