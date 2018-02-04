
var wd = require('wd');
var WdAndroid = require('wd-android');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

desiredCaps = {
    'browserstack.user': 'markwilson5',
    'browserstack.key': 'BwmCJ5Up1keZ3fBPEKhm',
    'build': 'Node Android',
    'name': 'single_test',
    'device': 'Google Pixel',
    'app':'bs://13011a4300946cce2440cd2695d51874bd9ad303',
    'browserstack.debug': true
};

// driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

// driver
//     .init(desiredCaps)
//     .then(function () {
//         return driver.waitForElementByAccessibilityId('signUp', asserters.isDisplayed && asserters.isEnabled, 30000);
//     })
//     .then(function (searchElement) {
//         return searchElement.click();
//     }).fin(function () { return driver.quit(); })
//     .done();


describe("Using Appium and WdAndroid to test Android App.", function () {
    this.timeout(300000);
    var driver,
        allPassed = true;

    before(async function () {

        var wdAndroid = new WdAndroid(wd);

        driver = await wdAndroid.promiseChainRemote("http://hub-cloud.browserstack.com/wd/hub");

        return driver
            .init(desiredCaps)
            .setImplicitWaitTimeout(10000);
    });


    after(function () {
        return driver.quit();
    });


    afterEach(function () {
        allPassed = allPassed && this.currentTest.state === 'passed';
    });


    it("should find an element", async function () {

        let elName = await driver.elementsByAccessibilityId('name');
        let elEmail = await driver.elementsByAccessibilityId('email');
        let el = await driver.elementsByAccessibilityId('signUp');
        //let elBackButton = await driver.elementsById('navigationBarBackground');
        // android:id/navigationBarBackground
        await elName[0].setText("Girish Talekar").click().back();
        await elEmail[0].setText("talekar.g@gmail.com").click().back();
        return el[0].click().sleep(4000);
    });

});

/*
driver
    .init(desiredCaps)
    .then(function () {
        return driver.waitForElementByAccessibilityId('Search Wikipedia', asserters.isDisplayed && asserters.isEnabled, 30000);
    })
    .then(function (searchElement) {
        return searchElement.click();
    })
    .then(function () {
        return driver.waitForElementById('org.wikipedia.alpha:id/search_src_text', asserters.isDisplayed && asserters.isEnabled, 30000);
    })
    .then(function (searchInput) {
        return searchInput.sendKeys("BrowserStack");
    })
    .then(function () {
        return driver.elementsByClassName('android.widget.TextView');
    })
    .then(function (search_results) {
        assert(search_results.length > 0);
    })
    .fin(function () { return driver.quit(); })
    .done();

    */