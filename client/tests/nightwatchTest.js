const moment = require('moment');

const dateTest = moment(new Date()).format('MM/DD/YYYY');


module.exports = {
  'Demo test ecosia.org': function (browser) {
    browser
      .url('http://localhost:3001/dashboard')
      .waitForElementVisible('body')
      .assert.visible('.navbar')
      .assert.visible('.form-control')
      .assert.visible('.carsPage')
      .assert.visible('.dashboardContainer')
      .click('.carsPage')
      .setValue('input[type=text]', 'Ford')
      .click('.searchBtn')
      .assert.visible('.container')
      .assert.visible('.card')
      .assert.visible('.checkoutBtn')
      .click('.checkoutBtn')
      .assert.visible('.firstNameField')
      .clearValue('.firstNameField')
      .setValue('.firstNameField', 'Ivan')
      .clearValue('.lastNameField')
      .setValue('.lastNameField', 'Georgiev')
      .clearValue('.ageField')
      .setValue('.ageField', '25')
      .setValue('.dateField', dateTest)
      .click('.bookCarBtn')
      .clearValue('input[type=text]')
      .click('.carsPage')
      .setValue('input[type=text]', 'Ford')
      .click('.searchBtn')
      .assert.containsText('.mainline-results', 'Ford')
      .end();
  },
};
