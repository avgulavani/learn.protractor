describe('Protractor sync example', function() {

	it('Open Angular js website', function() {

		browser.get("https://angularjs.org")
		browser.get("https://juliemr.github.io/protractor-demo/").then(function(){		
			console.log("i am the last step to execute");
		})
	})
})
