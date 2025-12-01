import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '24px 16px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>{children}</main>
      <Footer />
    </div>
  );
}
