const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);
// New: faz com que a atualização de um registro retorne o registro atualizado
// runValidators: Faz com que a atualização passe pela validação do schema (Ex.: campo inteiro não recebe string)
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo