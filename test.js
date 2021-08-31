const assert = require("assert");
const checkout = require("./checkout");

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