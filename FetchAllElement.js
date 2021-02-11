describe('Fetch all elements Demo    ', function () {

    function add(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();

    }

    it('Open Angular js website', function () {

        browser.get("https://juliemr.github.io/protractor-demo/");
        add(2, 3);
        add(4, 6);
        add(7, 8);
        add(13, 7);
        add(11, 14);

        //then -promise is resolved only for one item
        element.all(by.repeater("result in memory")).count().then(function (text) {

            console.log("total record count " + text)
        })

        //each -promise is resolved for all items
        // all and each method , also resolve promise for all element
        element.all(by.repeater("result in memory")).each(function (item) {

            item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text)
            })

        })

    })
})