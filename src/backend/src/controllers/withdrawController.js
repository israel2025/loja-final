const path = require('path');
const { readJSON, writeJSON } = require('../utils/fileDb');
const withdrawalsFile = path.join(__dirname, '..', '..', 'data', 'withdrawals.json');

function requestWithdraw(req, res) {
  const { vendorId, amount, pixKey } = req.body;
  const fee = 5.0;
  if (!vendorId || !amount) return res.status(400).json({ error: 'Campos faltando' });
  if (Number(amount) <= fee) return res.status(400).json({ error: 'Valor deve ser maior que taxa R$ 5,00' });

  const withdrawals = readJSON(withdrawalsFile);
  const w = {
    id: Date.now(),
    vendorId,
    amount: Number(amount),
    fee,
    finalAmount: Number((Number(amount) - fee).toFixed(2)),
    pixKey,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  withdrawals.push(w);
  writeJSON(withdrawalsFile, withdrawals);
  res.json({ ok: true, withdrawal: w });
}

function listWithdrawals(req, res) {
  const list = readJSON(withdrawalsFile);
  res.json(list);
}

module.exports = { requestWithdraw, listWithdrawals };
