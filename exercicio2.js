let products = [
	{ name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
	{ name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
	{ name: 'Pendrive', price: 10, quantity: 10, colors: [] },
	{ name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
	{ name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
	{ name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
	{ name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
	{ name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
	{ name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
	{ name: 'Monitor', price: 200, quantity: 3, colors: [] },
];

const productsWithId = () => {
	const insertId = products.map((product, index) => {
    return ({
    	id: index + 1,
			...product
		})
  }) 

	return insertId;
};

const logAllProductsName = (p) => {
	products.forEach(({ name }) => {
		console.log(name);
	});
};

const logProductIdThree = (p) => {
	const productWithIdThree = p.filter((product) => product.id === 3);

	console.log(productWithIdThree);
};

const producColorBlack = (p) => {
	const productsWithBlack = p.filter((product) => {
		const withColorBlack = product.colors.some((color) => color === 'black');

		if (withColorBlack) return product;
	});

	console.log(productsWithBlack);
};

const productWithoutColor = (p) => {
	const withoutColor = p.filter(({ colors }) => colors && colors.length !== 0);

	console.log(withoutColor);
};

console.log(productsWithId());
logAllProductsName(products);
logProductIdThree(productsWithId());
producColorBlack(productsWithId());
productWithoutColor(productsWithId());