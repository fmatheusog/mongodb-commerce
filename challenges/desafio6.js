db.produtos.find({
  curtidas: {
    $lt: 100,
    $gt: 10,
  },
}, {
  _id: false,
  nome: true,
  curtidas: true,
});