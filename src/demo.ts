function leads2Bots(leadsAmount:number, rounds:number, hours:number, rate:number):number {
  let everyRoundCalls:number = 0;
  let totalCalls:number = leadsAmount * rounds / hours;
  let bots:number = 0;
  for (let index = 1; index <= rounds; index++) {
    if (index !== 1) {
      totalCalls = totalCalls * (1-rate)
    }
    everyRoundCalls = everyRoundCalls + totalCalls;
    console.log(`The ${index} round calls => ${totalCalls}`);
  }
  console.log(`total calls: ${everyRoundCalls}`);
  bots = everyRoundCalls / rounds / 60;
  console.log(`needs bots: ${bots}`);
  return bots;
}

leads2Bots(250000, 3, 4, 0.15);

export default leads2Bots;
