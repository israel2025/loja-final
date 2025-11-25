import Link from 'next/link';
export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Loja - Home</h1>
      <p>
        <Link href="/register">Registrar</Link> • <Link href="/login">Entrar</Link> • <Link href="/vendor/register">Quero ser vendedor</Link>
      </p>
      <div id="products">Carregando produtos...</div>
      <script dangerouslySetInnerHTML={{
        __html: `
        (async()=>{
          const res = await fetch('/api/products');
          const list = await res.json();
          const el = document.getElementById('products');
          el.innerHTML = list.slice(0,20).map(p => '<div style="border:1px solid #ddd;padding:8px;margin:6px"><strong>'+p.title+'</strong><div>R$ '+p.price.toFixed(2)+'</div></div>').join('');
        })();
      `}} />
    </div>
  );
}
