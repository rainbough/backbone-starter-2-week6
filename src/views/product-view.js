(function () {

  window.ProductView = Backbone.View.extend({
  	template: _.template( $('#templates .products').html()),
  	className: 'store',


  	render: function () {
  	
  		var tempHtml = this.template(this.model.toJSON());
  		$('#store').html( tempHtml );
	}

   
  });

})();
