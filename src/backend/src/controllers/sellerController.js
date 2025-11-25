const path = require('path');
const { readJSON, writeJSON } = require('../utils/fileDb');
const vendorsFile = path.join(__dirname, '..', '..', 'data', 'vendors.json');
const usersFile = path.join(__dirname, '..', '..', 'data', 'users.json');

function registerVendor(req, res) {
  const { userId, fullName, cpf, cep, address, phone, birthDate, documentImage } = req.body;
  if (!userId || !fullName || !cpf || !cep || !address) return res.status(400).json({ error: 'Campos obrigatórios faltando' });

  // store vendor (automatic approval per your choice)
  const vendors = readJSON(vendorsFile);
  const vendor = { id: Date.now(), userId, fullName, cpf, cep, address, phone, birthDate, documentImage, status: 'approved', createdAt: new Date().toISOString() };
  vendors.push(vendor);
  writeJSON(vendorsFile, vendors);

  // upgrade user role
  const users = readJSON(usersFile);
  const user = users.find(u => u.id === Number(userId) || u.id === userId);
  if (user) {
    user.role = 'vendor';
    writeJSON(usersFile, users);
  }

  res.json({ ok: true, vendor });
}

function getVendorByUser(req, res) {
  const userId = req.query.userId;
  const vendors = readJSON(vendorsFile);
  const v = vendors.find(x => String(x.userId) === String(userId));
  if (!v) return res.status(404).json({ error: 'Vendedor não encontrado' });
  res.json(v);
}

module.exports = { registerVendor, getVendorByUser };
