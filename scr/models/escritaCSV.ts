import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Item } from './datas.interface';
import fs from 'fs';


const writeCSV = async (filePath: string, data: Item[]): Promise<void> => {
  const fileExists = fs.existsSync(filePath);
  const header = [
    { id: 'id', title: 'id' },
    { id: 'nome', title: 'nome'},
    { id: 'valor', title: 'valor' },
    { id: 'quantidade', title: 'quantidade'},
    { id: 'peso', title: 'peso'},
  ];
  if (!fileExists){
    console.log("entrou")
    await createCsvWriter({
      path: filePath,
      header:header
    }).writeRecords([]);
  }
  const csvWriter = createCsvWriter({
    path: filePath,
    header: header,
    append: true
  });

  return csvWriter.writeRecords(data);
};

export default writeCSV;