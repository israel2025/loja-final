import { useState } from 'react';
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  async function submit(e){ e.preventDefault();
    const res = await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
    const data = await res.json();
    if (data.ok) { localStorage.setItem('user', JSON.stringify(data.user)); alert('Logado'); window.location.href='/'; }
    else alert('Erro: ' + (data.error || ''));
  }
  return (
    <form onSubmit={submit} style={{padding:20}}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button>Entrar</button>
    </form>
  );
}
