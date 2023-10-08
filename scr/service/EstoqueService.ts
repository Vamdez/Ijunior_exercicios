import { Item } from "../models/datas.interface";
import writeCSV from "../models/escritaCSV";
import  writeFile  from "../models/escritaCSV";
import readCSV from "../models/leituraCSV";
import fs from 'fs';

const urlcsv ='.\\scr\\models\\estoque.csv';

class Estoque{
    async adicionar([item]:Item[]){

        if(!item.nome||!item.peso||!item.quantidade||!item.valor){
            throw new Error("Valores Invalidos");
        }

        if(item.id < 0){
            throw new Error("Id menor que zero");
        }

        const itens_estoque = await readCSV(urlcsv);
        const lista_id = itens_estoque.map(i =>Number(i.id))
        if(lista_id.includes(item.id)){
            throw new Error("Id já existente");
        }
        await writeFile(urlcsv, [item]);
    }
    
    async remover(id:number){
        const itens_estoque = await readCSV(urlcsv);
        const lista_id = itens_estoque.map(i =>Number(i.id))
        const index = lista_id.indexOf(id);
        if(index == -1){
            throw new Error("Id não encontrado")
        }
        itens_estoque.splice(index, 1);
        fs.writeFileSync(urlcsv, '');
        fs.appendFileSync(urlcsv, 'id,nome,valor,quantidade,peso\n');
        await writeCSV(urlcsv, itens_estoque);
    }

    async listar(){
        const itens_estoque = await readCSV(urlcsv);
    }

    async get_valor_tot(): Promise<number>{
        const itens_estoque = await readCSV(urlcsv);
        const valor_total = itens_estoque.reduce((total, item) => {
            return total + item.valor*item.quantidade;
        }, 0)
        return valor_total
    }

    async get_peso_tot(): Promise<number>{
        const itens_estoque = await readCSV(urlcsv);
        const peso_total = itens_estoque.reduce((total, item) => {
            return total + item.peso*item.quantidade;
        }, 0)
        return peso_total
    }

    async get_total_itens(): Promise<number>{
        const itens_estoque = await readCSV(urlcsv);
        const quantidade_item = itens_estoque.reduce((total, item) => {
            return total + item.quantidade*1;
        }, 0)
        return quantidade_item;
    }

    async get_media_valor(): Promise<number>{
        console.log()
        return await this.get_valor_tot()/await this.get_total_itens();
    }

    async get_media_peso(): Promise<number>{
        return await this.get_peso_tot()/await this.get_total_itens();
    }

    async get_qnt_item(): Promise<number>{
        const itens_estoque = await readCSV(urlcsv);
        return itens_estoque.length;
    }
}

export default new Estoque();