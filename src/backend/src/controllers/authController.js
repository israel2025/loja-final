 const path = require('path');
const { readJSON, writeJSON } = require('../utils/fileDb');

const usersFile = path.join(__dirname, '..', '..', 'data', 'users.json');

function register(req, res) {
  const { email, password, name } = req.body;
  if (!email || !password || !name) return res.status(400).json({ error: 'Campos faltando' });

  const users = readJSON(usersFile);
  if (users.find(u => u.email === email)) return res.status(400).json({ error: 'Email já existe' });

  const id = Date.now();
  const user = { id, email, password, name, role: 'customer', createdAt: new Date().toISOString() };
  users.push(user);
  writeJSON(usersFile, users);
  res.json({ ok: true, id });
}

function login(req, res) {
  const { email, password } = req.body;
  const users = readJSON(usersFile);
  const u = users.find(x => x.email === email && x.password === password);
  if (!u) return res.status(401).json({ error: 'Credenciais inválidas' });
  res.json({ ok: true, user: { id: u.id, email: u.email, name: u.name, role: u.role } });
}

module.exports = { register, login };
