describe('Protractor Alert steps', function () {

    it('Open NonAngular js website Alerts', function () {

        //rahulonlinetutor@gmail.com

        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get("http://itgeard.com/demo/1506-ajax-loading.html");
       
        element(by.css("a[href*='loadAjax']")).click(); 
        var EC=protractor.ExpectedConditions;

        browser.wait(EC.invisibilityof(element(by.id("loader"))),8000);
        element(by.id("results")).getText().then(function(text){
            console.log(text);
        })
    })

    //browser.get() will hit url on the browser
    // write your raw protractor code
    //Each it block will be called as a spec

})
    //first parameter- Test suite name
    //Second parameter - function (function wil have all tests (it blocks)
    //first parameter- Test case  name