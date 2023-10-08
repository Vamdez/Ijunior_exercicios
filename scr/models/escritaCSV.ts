import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Item } from './datas.interface';

const writeCSV = async (filePath: string, data: Item[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'id', title: 'Id' },
      { id: 'nome', title: "Nome"},
      { id: 'value', title: 'Valor' },
      { id: 'quantidade', title: "Quantidade"},
      { id: 'peso', title: "Peso"},
    ]
  });

  return csvWriter.writeRecords(data);
};
