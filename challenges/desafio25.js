db.produtos.updateMany({
  valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gt: 39 } } },
}, {
  $push: { tags: "muito sódio" },
});

db.produtos.find({}, { _id: false, nome: true, tags: true });