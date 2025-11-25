import { useState } from 'react';
export default function Register(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [name,setName]=useState('');
  async function submit(e){ e.preventDefault();
    const res = await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password,name})});
    const data = await res.json();
    if (data.ok) { alert('Registrado! Faça login.'); window.location.href='/login'; }
    else alert('Erro: ' + (data.error || ''));
  }
  return (
    <form onSubmit={submit} style={{padding:20}}>
      <h2>Registrar</h2>
      <input placeholder="Nome" value={name} onChange={e=>setName(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button>Registrar</button>
    </form>
  );
}
