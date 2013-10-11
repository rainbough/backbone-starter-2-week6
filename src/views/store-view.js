(function(){

window.storeView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.onProductAdd);
	},
	onProductAdd: function(newProduct){
		store.view = new ProductView({
			model: Product
		})

	}
})

}());