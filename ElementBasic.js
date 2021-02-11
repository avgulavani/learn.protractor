describe('Protractor Element Demo',function(){
	it('Locators',function(){
    
      //  browser.waitForAngularEnabled(false)  // don't wait for anugular element.
      //  browser.get("http://www.google.com")  // non angular site
      
      
      browser.get("https://juliemr.github.io/protractor-demo/")
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        
        //tagname[attribute='value']
         //resolving promosing and then only taking real output how? use then(functiona(){})
        /*
        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log(text)

           
        });*/

        // expect is jasmine assertion
        // jasmine takes care of promise resolve
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

        expect("test").toMatch("te");

		})	
})