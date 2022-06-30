db.produtos.updateMany({
  nome: { $ne: "McChicken" },
  ingredientes: { $nin: ["ketchup"] },
}, {
  $push: { ingredientes: "ketchup" },
});

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });