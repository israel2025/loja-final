import { useState } from 'react';
export default function VendorDashboard(){
  const [amount,setAmount] = useState('');
  async function requestWithdraw(e){ e.preventDefault();
    const u = JSON.parse(localStorage.getItem('user')||'null');
    if (!u) return alert('Faça login primeiro');
    const res = await fetch('/api/withdrawals/request', { method: 'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ vendorId: u.id, amount: Number(amount), pixKey: 'CHAVE_PIX_EXEMPLO' }) });
    const data = await res.json();
    if (data.ok) alert('Saque solicitado. Valor líquido: R$ ' + data.withdrawal.finalAmount);
    else alert('Erro: ' + (data.error || ''));
  }

  return (
    <div style={{padding:20}}>
      <h2>Dashboard do Vendedor</h2>
      <form onSubmit={requestWithdraw}>
        <label>Valor (R$)</label><br/>
        <input value={amount} onChange={e=>setAmount(e.target.value)} /><br/>
        <small>Ao solicitar, será cobrada uma taxa fixa de R$ 5,00.</small><br/><br/>
        <button type="submit">Solicitar Saque via Pix</button>
      </form>
    </div>
  );
}
