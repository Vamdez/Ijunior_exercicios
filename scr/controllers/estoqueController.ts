import { isExpressionWithTypeArguments } from "typescript";
import { Item } from "../models/datas.interface";
import Estoque from "../service/EstoqueService";

export async function adicionarItem(item:Item) {
    try{
        await Estoque.adicionar([item]);
        console.log("Produto Adicionado")
    }
    catch(error){
        console.log("Erro ao add produto", error);
    }
}

export async function removerItem(id:number){
    try{
    console.log("Removendo Item!");
    await Estoque.remover(id);
    console.log("Produto Removido!")
    }
    catch(error){
        console.log(error);
    }
}

export async function listarItens() {
    try{
        console.log("Listando itens");
        await Estoque.listar()
    }
    catch(error){
        console.log(error)
    }
}

export async function SomaValor() {
    try{
        const valor =await Estoque.get_valor_tot();
        console.log("Valor total:", valor);
    }
    catch(error){
        console.log(error);
    }
}

export async function SomaPeso() {
    try{
        const peso = await Estoque.get_peso_tot();
        console.log("Peso total:", peso, "kg");
    }
    catch(error){
        console.log(error);
    }
}

export async function TotalItens() {
    try{
        const total = await Estoque.get_total_itens();
        console.log("Total de itens:", total);
    }
    catch(error){
        console.log(error);
    }
}

export async function MediaPeso() {
    try{
        const media = await Estoque.get_media_peso();
        console.log("Média de peso:", media);
    }
    catch(error){
        console.log(error);
    }
}

export async function MediaValor() {
    try{
        const media = await Estoque.get_media_valor();
        console.log("Média de valor:", media);
    }
    catch(error){
        console.log(error);
    }
}

export async function QuantidadeTotalItem() {
    try{
        const total = await Estoque.get_total_itens();
        console.log("Total de itens:", total);
    }
    catch(error){
        console.log(error);
    }
}

export async function QuantidadeItem() {
    try{
        const qntd = await Estoque.get_qnt_item();
        console.log("Quantidade de itens:", qntd);
    }
    catch(error){
        console.log(error);
    }
}