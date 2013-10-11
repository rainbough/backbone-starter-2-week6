(function () {

   var product = new Product({
		name: 'product name',
		price: '24.95'
	});

	var myView = new ProductView({
		model: product
		});

	myView.render();
	console.log('myView.el', myView.el);

})();
