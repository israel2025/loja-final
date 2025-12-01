import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* NAVBAR */}
      <header className="border-b border-neutral-800">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
            Prime Grandvox
          </h1>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <Link href="/products" className="hover:text-yellow-400">Produtos</Link>
            <Link href="/vendor/register" className="hover:text-yellow-400">Seja Vendedor</Link>
            <Link href="/login">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-semibold">
                Entrar
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            O melhor marketplace para vendedores e clientes.
          </h2>
          <p className="text-neutral-400 mb-6">
            Produtos de qualidade, vendedores confiáveis e pagamentos seguros.
            Tudo em um lugar só.
          </p>
          <Link href="/register">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-semibold text-lg">
              Criar Conta Grátis
            </button>
          </Link>
        </div>

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Hero"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6">Categorias</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Eletrônicos", "Acessórios", "Moda", "Casa & Cozinha"].map((cat) => (
            <div
              key={cat}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-yellow-500 transition cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6">Produtos em Destaque</h3>

        <div id="products" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-neutral-500">Carregando produtos...</div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (async()=>{
                const res = await fetch('/api/products');
                const list = await res.json();
                const el = document.getElementById('products');

                el.innerHTML = list.slice(0,6).map(p => 
                  '<div class="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-yellow-500 transition">' +
                    '<img src="'+p.image+'" class="w-full h-48 object-cover rounded-md mb-3" />' +
                    '<h4 class="font-semibold mb-1">'+p.title+'</h4>' +
                    '<p class="text-yellow-400 text-lg font-bold">R$ '+p.price.toFixed(2)+'</p>' +
                  '</div>'
                ).join('');
              })();
            `,
          }}
        />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 mt-12 py-6 text-center text-neutral-400">
        © {new Date().getFullYear()} Prime Grandvox — Todos os direitos reservados.
      </footer>
    </div>
  );
}
