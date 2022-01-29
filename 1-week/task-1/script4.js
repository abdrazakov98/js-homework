const souvenirWeight = 75;
const baubleWeight = 112;

let souvenirAmount = prompt("Сколько сувенир купили?");
    baubleAmount = prompt("Сколько безделушек купили?");

let sum = (souvenirWeight * souvenirAmount + baubleWeight * baubleAmount);

alert(`Общий вес сувенира: ${sum} грамм`);
document.write(`Общий вес безделушек: ${sum} грамм`);
console.log(`Общий вес посылки: ${sum} грамм`);