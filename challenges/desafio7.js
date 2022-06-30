db.produtos.find({
  tags: { $exists: false },
  vendidos: { $ne: 50 },
}, {
  _id: false,
  nome: true,
  vendidos: true,
});