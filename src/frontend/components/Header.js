import Link from 'next/link';

export default function Header() {
  return (
    <header style={{background:'#0f172a',color:'#fff',padding:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{fontWeight:700,fontSize:20}}>
        <Link href="/"><a style={{color:'#fff',textDecoration:'none'}}>Prime Granvox</a></Link>
      </div>
      <nav style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link href="/cart"><a style={{color:'#cbd5e1'}}>Carrinho</a></Link>
        <Link href="/vendor"><a style={{color:'#cbd5e1'}}>Fornecedor</a></Link>
        <Link href="/login"><a style={{color:'#cbd5e1'}}>Entrar</a></Link>
      </nav>
    </header>
  );
}
