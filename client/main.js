var React = require('react');
var Fluxxor = require('fluxxor');

var constants = {
	ROUTE: "ROUTE"
};

var RouteStore = Fluxxor.createStore({
	initialize: function () {
		this.routes = [];

		this.bindActions(
			constants.ROUTE, this.onRoute
		);
	},

	onRoute: function (route) {
		console.log('ROUTE to ' + route);
	}
});

var actions = {
	route: function (route) {
		this.dispatch(constants['ROUTE'], {
			route: route
		});
	}
};

var stores = {
	RouteStore: new RouteStore
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on('dispatch', function (type payload) {
	if (console && console.log) {
		console.log('[Dispatch]', type, payload);
	}
});

var FluxMixin = FluxxorMixin(React);
var StoreWatchMixin =  Fluxxor.StoreWatchMixin;

var Application = React.createClass({
	mixins: [
		Flux
	]
})