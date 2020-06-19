/// <reference types="cypress" />
const User =  require('../../fixtures/User.json')
const { timeout } = require("async")

describe('My First Test', function(){
    before(function(){
        cy.log("Init Test")
        cy.visit("https://web.cotalker.com/login")
        cy.get('#userNameInput').type(User.email)
        cy.get('#mat-input-1').type(User.password)
        cy.get('#login-button').click()
        cy.get('#buttonStartApp',{timeout: 30000}).click()
        cy.get('#5ee3d5ce8c2ca20008167504').click()
    })
    after(function(){
        cy.log("End Test")
    })
    afterEach(function(){
        //Pause Test 
        cy.pause()
    })    
    it('Part A - Successful',function(){
        cy.get('.single').click()
        //Complete form data
        cy.get('.cont-textinput').type('Correct')
        cy.get('.number').type('32')
        cy.get(':nth-child(1) > .field > .field-button').click()
        //cy.get('#mat-input-6').type('22/4/2020') another way to select the time 
        cy.get('.mat-datepicker-toggle-default-icon').click().get('[aria-label="14 June 2020"] >').click();
        cy.get('.time > .form').type('19:00')
        cy.get('.survey-content-send-button',{timeout: 50000}).click()        
    })
    it('Part A - Erroneous',function(){
        cy.get('.single').click()
        //Complete form data
        cy.get('.cont-textinput').type('Fail')
        cy.get('.number').type('332')
        cy.get(':nth-child(1) > .field > .field-button').click()
        cy.get('.mat-datepicker-toggle-default-icon').click().get('[aria-label="14 June 2020"] >').click();
        cy.get('.time > .form').type('19:00')
        cy.get('.survey-content-send-button',{timeout: 50000}).click()
        //If get error msg click cancel botton
        cy.get('.survey-error.ng-star-inserted').then((val) => {
            if (val) {
                cy.log("ERROR")
                cy.get('.survey-content-cancel-button',{timeout: 50000}).click()
            }
          })        
    })
    it('Part B - Successful',function(){                
        cy.get('.ng-touched').type('/giphy test{enter}')        
    })
    it('Part B - Erroneous',function(){        
        cy.get('.ng-touched').type('/giph hommer{enter}')        
    })
})