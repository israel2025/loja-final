const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const sequelize = require("./src/config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api", routes);

// Conectar ao banco e sincronizar
(async () => {
  try {
    await sequelize.authenticate();
    console.log("🔌 SQLite conectado com sucesso!");

    await sequelize.sync({ alter: true });
    console.log("📦 Tabelas sincronizadas!");

    const PORT = 3001;
    app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
  } catch (err) {
    console.error("❌ ERRO NO BANCO DE DADOS:", err);
  }
})();
