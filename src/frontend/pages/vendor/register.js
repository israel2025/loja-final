import { useState } from 'react';
export default function VendorRegister(){
  const [fullName,setFullName]=useState(''); const [cpf,setCpf]=useState(''); const [cep,setCep]=useState(''); const [address,setAddress]=useState(''); const [phone,setPhone]=useState(''); const [birth,setBirth]=useState(''); const [doc,setDoc]=useState(null);

  async function submit(e){ e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user')||'null');
    if (!user) return alert('Faça login primeiro');
    let docBase = null;
    if (doc){
      const buf = await doc.arrayBuffer();
      docBase = Array.from(new Uint8Array(buf));
    }
    const body = { userId: user.id, fullName, cpf, cep, address, phone, birthDate: birth, documentImage: docBase };
    const res = await fetch('/api/vendors/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const data = await res.json();
    if (data.ok) { alert('Vendedor aprovado automaticamente.'); window.location.href='/vendor/dashboard'; }
    else alert('Erro: ' + (data.error || ''));
  }

  return (
    <form onSubmit={submit} style={{padding:20}}>
      <h2>Quero ser vendedor</h2>
      <input placeholder="Nome completo" value={fullName} onChange={e=>setFullName(e.target.value)} /><br/>
      <input placeholder="CPF" value={cpf} onChange={e=>setCpf(e.target.value)} /><br/>
      <input placeholder="CEP" value={cep} onChange={e=>setCep(e.target.value)} /><br/>
      <input placeholder="Endereço" value={address} onChange={e=>setAddress(e.target.value)} /><br/>
      <input placeholder="Telefone" value={phone} onChange={e=>setPhone(e.target.value)} /><br/>
      <input type="date" value={birth} onChange={e=>setBirth(e.target.value)} /><br/>
      <input type="file" onChange={e=>setDoc(e.target.files[0])} /><br/>
      <button>Enviar</button>
    </form>
  );
}
