/// <reference types="cypress" />

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("open todo page", () => {
  cy.visit("/");
});

Then("verify to do title page {string}", (title) => {
  cy.get("#app > h1").should("contain", title);
});
// ช่องตัวเลข
And("click checkbox todo at {int}", (index) => {
  cy.get("#todo-"+index).check();
});

And("verify completed todo item is {string}", (label) => {
  cy.get("#list-summary").should("contain", label);
});

And("click edit todo at {int}", (index) => {
  //ค่า index ค่าของแถวที่1
  cy.get(`#app > ul > li:nth-child(${index}) > div > div.btn-group > button:nth-child(1)`).click();
});

And("click save todo at {int}", (index) => {
  cy.get(`#app > ul > li:nth-child(${index}) > form > div.btn-group > button.btn.btn__primary`).click();
});

And("verify description at index {int} is {string}", (index, desc) => {
  cy.get(`#app > ul > li:nth-child(${index}) > div > div.custom-checkbox > label`).should("contain", desc);
});
// มี 2 paramidtor int ค่า 1 รับคำว่า start cypress {int index} { string desc }
And("input description todo at {int} to {string}",(index, desc) =>{
  cy.get(`#todo-${index}`)
  .clear({ force: true })
  .type(desc, { force: true });
})

And("click delete todo at {int}", (index) => {
  cy.get(`#app > ul > li:nth-child(${index}) > div > div.btn-group > button.btn.btn__danger`).click();
})

And("verify todo list {string} not found", (desc)=>{
  cy.get('#app > ul > li:nth-child(1) > div > div.custom-checkbox > label').should('not.exist')
})
