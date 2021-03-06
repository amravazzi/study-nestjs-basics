import { BadRequestException, Injectable } from '@nestjs/common';

export class CurrenciesService {
  async getCurrency(currency: string): Promise<any> {}
}

@Injectable()
export class ExchangeService {
  constructor(currenciesService: CurrenciesService) {}

  async convertAmount({ from, to, amount }): Promise<any> {
    if (!from || !to || !amount) throw new BadRequestException();
  }
}
