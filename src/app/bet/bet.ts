export class Bet {
  id: number;
  name: string;
  cote: number;

  constructor(id: number, name: string, cote: number) {
    this.id = id;
    this.name = name;
    this.cote = cote;
  }



}

/*calculGains(mise: number): number {
  return mise * this.cote;
}
const myBet = new Bet(1, "L'équipe A gagne ", 6.67);
console.log(`gains potentiels : ${myBet.calculGains(10)}`);*/
