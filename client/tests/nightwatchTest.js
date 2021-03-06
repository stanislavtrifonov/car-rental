const moment = require('moment');

const dateTest = (moment(new Date(), 'MM/DD/YYYY').add(5, 'days')).format('MM/DD/YYYY');


module.exports = {
  'Demo test ecosia.org': function (browser) {
    browser
      .url('http://localhost:3001/dashboard')
      .waitForElementVisible('body')
      .assert.visible('.navbar')
      .assert.visible('.form-control')
      .assert.visible('.carsPage')
      .assert.visible('.dashboardContainer')
      .assert.urlContains('/dashboard')
      .click('.carsPage')
      .setValue('input[type=text]', 'Lada')
      .click('.searchBtn')
      .assert.urlContains('/home')
      .assert.not.elementPresent('.card')
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'Ford')
      .click('.searchBtn')
      .assert.visible('.container')
      .assert.visible('.cardAvailableCar')
      .assert.visible('.checkoutBtn')
      .click('.checkoutBtn')
      .assert.urlContains('/cars')
      .assert.visible('.firstNameField')
      .assert.value('.firstNameField', 'Mark')
      .clearValue('.firstNameField')
      .setValue('.firstNameField', 'Ivan')
      .assert.value('.firstNameField', 'Ivan')
      .clearValue('.lastNameField')
      .setValue('.lastNameField', 'Georgiev')
      .clearValue('.ageField')
      .setValue('.ageField', '25')
      .setValue('.dateField', dateTest)
      .click('.bookCarBtn')
      .assert.visible('.dashboardContainer')
      .assert.containsText('.dashboardContainer', 'Ford')
      .clearValue('input[type=text]')
      .click('.carsPage')
      .setValue('input[type=text]', 'Ford')
      .click('.searchBtn')
      .assert.not.elementPresent('.cardAvailableCar')
      .end();
  },
};
