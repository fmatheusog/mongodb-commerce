db.produtos.find({
  vendidos: { $lt: 100, $gt: 50 },
}, { 
  _id: false,
  nome: true,
  vendidos: true,
}).sort({ vendidos: 1 });