const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const sequelize = require("./config/db");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// Rotas
app.use("/api", routes);

// Inicialização
(async () => {
  try {
    await sequelize.authenticate();
    console.log("🔌 Banco conectado com sucesso!");

    await sequelize.sync(); // sem alter: true (mais seguro)
    console.log("📦 Tabelas sincronizadas!");

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () =>
      console.log(`🚀 Servidor rodando na porta ${PORT}`)
    );
  } catch (err) {
    console.error("❌ ERRO NO BANCO DE DADOS:", err);
  }
})();
