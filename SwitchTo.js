describe('Protractor Alert steps', function () {

    it('Open NonAngular js website Alerts', function () {

        //rahulonlinetutor@gmail.com

        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get("http://qaclickacademy.com/practice.php");
        browser.switchTo().frame("courses-iframe");
        element(by.css("a[href*='sign_in']")).getText().then(function (text) {
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