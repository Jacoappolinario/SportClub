import csvParse from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { ISportsRepository } from '@modules/club/repositories/ISportsRepository';

interface IImportSport {
  name: string;
  description: string;
}
@injectable()
class ImportSportUseCase {
  constructor(
    @inject('SportsRepository')
    private sportsRepository: ISportsRepository,
  ) {}

  loadSports(file: Express.Multer.File): Promise<IImportSport[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const sports: IImportSport[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          sports.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(sports);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const sports = await this.loadSports(file);

    sports.map(async sport => {
      const { name, description } = sport;

      const existsSport = await this.sportsRepository.findByName(name);

      if (!existsSport) {
        await this.sportsRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportSportUseCase };
