เขียน spec ใช้เชคหน้า webpagesด้วย cucumber 

todo.feature fuc1
fuc1
    
        todo.feature
        Given open todo page
    
            Given("open todo page", () => {
                cy.visit("/");
                                            }); นี่คือ 1 fuc
ไฟล์ keywords กลุ่ม fuctions 
Then("verify to do title page {string}", (title) => {                      ////string รับค่า title
  cy.get("#app > h1").should("contain", title);                           ////("#app > h1") copyในinspect หน้า element เลือก div ที่เราตรวจสอบ และ cody selector
                                                    });


---------------------------------------------------------------------------------------------------------

fuc3 เชคช่องกับ keyword 
Scenario: Edit description of todo
    Given open todo page
    When click edit todo at 1
    And input description todo at 1 to "Start Cypress"
    And click save todo at 1
    Then verify description at index 1 is "Start Cypress"

//And input description todo at 1 to "Start Cypress"
// มี 2 paramidtor int ค่า 1 รับคำว่า start cypress
And("input description todo at {int} to {string}",(index, desc) =>{
  cy.get(`#todo-${index}`)
  .clear({ force: true })           //click เพื่อ clear ค่าเก่า
  .type(desc, { force: true });     //ผลค่าล่าสุด
})

-----------------------------------------------------------------------------------------------------------

Feature : Feature คือ File ที่เขียนด้วย ข้อความธรรมดา ด้วย ภาษาอังกฤษ ที่ คนทั่วไปอ่านแล้วเข้าใจได้เลย
ไม่ได้เขียน คำศัพท์ทางเทคนิคลงไป ซึ่งมีรูปแบบหลักการเขียน ที่เรียกว่า Gherkins Syntax โดยจะมี Syntax ลักษณะนี้

Feature
Scenario
Given
When
Then

บางครั้ง มีการนำคำว่า And , But มาใช้ในการเขียน






