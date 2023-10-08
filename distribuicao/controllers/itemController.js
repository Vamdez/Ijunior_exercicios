"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(nome, id, valor, peso, quantidade) {
        this.nome = nome;
        this.id = id;
        this.valor = valor;
        this.peso = peso;
        this.quantidade = quantidade;
    }
    getNome() {
        return this.nome;
    }
}
exports.Item = Item;
//# sourceMappingURL=itemController.js.map