import fs from 'fs';
import csv from 'csv-parser'; 
import { Item } from './datas.interface';

const readCSV = async (filePath: string): Promise<Item[]> => {
  return new Promise((resolve, reject) => {
    const results: Item[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: Item) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error:string) => reject(error));
  });
};