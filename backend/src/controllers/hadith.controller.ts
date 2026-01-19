import { Request, Response } from 'express';

export class HadithController {
  async getAllHadith(req: Request, res: Response) {
    res.json({ message: 'Hadith API coming soon' });
  }
}

export const hadithController = new HadithController();