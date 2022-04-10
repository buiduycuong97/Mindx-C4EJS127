const Drink = function(name, price, material, vote, preserve) {
    this.name = name;
    this.price = price;
    this.material = material;
    this.vote = vote;
    this.preserve = preserve;
}

let sodaMix = new Drink(
    'soda', '40k', ['soda', 'sugar', 'syrup', 'lemon'],
    '***', {
        notOpen: { temperature: 'normal', date: '2year' },
        opened: { temperature: 'cold', date: '6month' }
    });

for (let key in sodaMix.preserve) {
    for (let i in sodaMix.preserve[key]) {
        console.log(`${key} - ${i} : ${sodaMix.preserve[key][i]}  `);
    }

}