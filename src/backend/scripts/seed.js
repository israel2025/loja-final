const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const products = [];
for (let i = 1; i <= 200; i++) {
  products.push({
    id: i,
    title: `Produto Teste #${i}`,
    description: `Descrição do produto ${i}`,
    price: Number((Math.random() * 490 + 10).toFixed(2)),
    stock: Math.floor(Math.random() * 50) + 1,
    images: []
  });
}

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(products, null, 2));
console.log('200 produtos seedados em backend/data/products.json');
