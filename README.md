# 🛒 Loja Virtual com Área do Cliente, Vendedor e Admin

Este projeto é uma plataforma completa de e-commerce com:

- Área do cliente
- Área do vendedor (liberada após análise)
- Área do administrador (somente o dono do site)
- Sistema de produtos
- Sistema de checkout
- Saque com taxa fixa de R$ 5,00
- Upload de imagens
- 200 produtos automáticos via script
- Pix (manual e API futura)
- Painel completo para vendedores
- Dashboard financeiro

---

## 🚀 Estrutura do Projeto

/sua-loja
│
├── backend/
└── frontend/


---

## 🟨 Backend

### Instalar dependências:
cd backend
npm install

### Rodar o servidor:
node server.js


---

## 🟦 Frontend

### Instalar dependências:
cd frontend
npm install


### Rodar o frontend:
npm run dev


---

## ⚙️ Configurar Variáveis `.env`

Copie o arquivo:
.env.example


Preencha com:

TOKEN_API=SEU_TOKEN
DATABASE_URL=mysql://root:SENHA@localhost/loja


---

## 📦 Gerar 200 produtos automáticos

cd backend
node scripts/generateProducts.js


---

## 💰 Sistema de Saque

O vendedor solicita saque → aparece modal informando que:

**“Será cobrada automaticamente uma taxa fixa de R$ 5,00 para custos operacionais e processamento.”**

---

## 🧑‍💻 Usuários do sistema

- **Cliente** → cria conta e compra
- **Vendedor** → precisa ser aprovado
- **Admin (você)** → acesso exclusivo, apenas 1 admin

---

## ✔ Tecnologias usadas

- Node.js
- Express
- MySQL
- Next.js (React)
- TailwindCSS
- API Pix futura
- JWT autenticação

---

## 📌 Observação

Este projeto ainda não está finalizado — você deve adicionar os códigos em cada arquivo conforme avançarmos.
