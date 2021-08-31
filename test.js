const assert = require("assert");
const Checkout = require("./Checkout");

const checkout = new Checkout();

describe("checkout", function(){

	it ("This test will pass", function(){
		assert.equal(true, true);
	});

	it ("I can scan an item without an error being thrown", function(){
		assert.doesNotThrow(
			function() {
				checkout.scan("Apple");
			}
		);
	});

});