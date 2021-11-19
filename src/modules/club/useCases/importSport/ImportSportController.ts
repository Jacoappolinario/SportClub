import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportSportUseCase } from './ImportSportUseCase';

class ImportSportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importSportUseCase = container.resolve(ImportSportUseCase);

    await importSportUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportSportController };
