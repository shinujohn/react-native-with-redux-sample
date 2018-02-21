var wd = require('wd');
var WdAndroid = require('wd-android');
var assert = require('assert');
var asserters = wd.asserters;


desiredCaps = {
    'browserstack.user': 'markwilson5',
    'browserstack.key': 'BwmCJ5Up1keZ3fBPEKhm',
    'build': 'Node Android',
    'name': 'single_test',
    'device': 'Google Pixel',
    'app': 'bs://sjohn13011a4300946cce2440cd2695d51874bd9ad303',
    'browserstack.debug': true
};

describe("Using Appium and WdAndroid to test Android App.", function () {
    this.timeout(300000);
    var driver,
        allPassed = true;

    before(function () {

        var wdAndroid = new WdAndroid(wd);
        return new Promise((res, rej) => {
            driver = wdAndroid.promiseChainRemote("http://hub-cloud.browserstack.com/wd/hub");
            driver.init(desiredCaps)
                .setImplicitWaitTimeout(10000).then(() => {
                    res();
                });
        });

    });


    after(function () {
        return driver.quit();
    });


    afterEach(function () {
        allPassed = allPassed && this.currentTest.state === 'passed';
    });


    it("should find an element and save the details", function () {
        return new Promise((res, rej) => {
            driver.waitForElementByAccessibilityId('name', asserters.isDisplayed && asserters.isEnabled, 30000)
                .then((elName) => {
                    return elName.setText("Girish Talekar").click().back();
                })
                .then(function () {
                    return driver.waitForElementByAccessibilityId('email', asserters.isDisplayed && asserters.isEnabled, 30000);
                })
                .then(function (elEmail) {
                    return elEmail.setText("talekar.g@gmail.com").click().back();
                })
                .then(function () {
                    return driver.waitForElementByAccessibilityId('password', asserters.isDisplayed && asserters.isEnabled, 30000);
                })
                .then(function (elPassword) {
                    return elPassword.setText("password").click().back();
                })
                .then(function () {
                    return driver.waitForElementByAccessibilityId('phone', asserters.isDisplayed && asserters.isEnabled, 30000);
                })
                .then(function (elPhone) {
                    return elPhone.setText("8380083849").click().back();
                })
                .then(function () {
                    return driver.waitForElementByAccessibilityId('address', asserters.isDisplayed && asserters.isEnabled, 30000);
                })
                .then(function (elAddress) {
                    return elAddress.setText("Capita India").click().back();
                })
                .then(function () {
                    return driver.waitForElementByAccessibilityId('signUp', asserters.isDisplayed && asserters.isEnabled, 30000);
                })
                .then(function (searchElement) {
                    return searchElement.click().sleep(4000);
                }).fin(function () { res();})
                .done();
        });
    });

});
