import { Item } from "./models/datas.interface";
import * as estoqueController from "./controllers/estoqueController";
import { fail } from "assert";
import { parse } from "path";
const readline = require('readline');


const menu =`1)Adicionar item no Estoque
2)Remover item do Estoque
3)Listar itens do Estoque
4)Ver valor total do Estoque
5)Ver peso total do Estoque
6)Calcular média de valor dos itens do Estoque
7)Calcular média de peso dos itens do Estoque
8)Ver quantidade total de Itens no Estoque
9)Ver quantidade total de Itens diferentes no Estoque
10)Sair do Sistema
--------------------------`;

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function exec_opc(){
    while(true){
        console.log(menu);
        const opc = await fazer_pergunta("Escolha opc:");
        switch (opc){
            case '1':
                const item:Item = {
                    nome:"",
                    id:0,
                    valor:0,
                    quantidade:0,
                    peso:0,
                };
                console.log("Adicionando item:");
                item.id = parseInt(await fazer_pergunta("Defina ID:"));
                item.nome = await fazer_pergunta("Defina Nome:");
                item.valor = parseFloat(await fazer_pergunta("Defina Valor:"));
                item.quantidade = parseInt(await fazer_pergunta("Defina Quantidade:"));
                item.peso = parseFloat(await fazer_pergunta("Defina Peso em kg:"));
                await estoqueController.adicionarItem(item);
                break;

            case '2':
                const id = parseInt(await fazer_pergunta("Defina Id do item que deseja remover:"))
                await estoqueController.removerItem(id);
                break;

            case '3':
                await estoqueController.listarItens();
                break;
            
            case '4':
                await estoqueController.SomaValor();
                break
            
            case '5':
                await estoqueController.SomaPeso();
                break;
            
            case '6':
                await estoqueController.MediaValor();
                break;

            case '7':
                await estoqueController.MediaPeso();
                break;
            
            case '8':
                await estoqueController.QuantidadeTotalItem();
                break;
            
            case '9':
                await estoqueController.QuantidadeItem();
                break;
            
            case '10':
                leitor.close();
                return;
                
            default:
                console.log("Opc invalida");

        }
    }
}

function fazer_pergunta(pergunta: string): Promise<string> {
    return new Promise((resolve) => {
        leitor.question(pergunta, (resposta:any) => {
            resolve(resposta);
        });
    });
}

exec_opc();