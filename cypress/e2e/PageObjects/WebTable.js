class WebTable{
    
    /* Only written the adequate level of code for the assignment else these classes also can be customized to tailor it more general */

    addBtn = "#addNewRecordButton"
    editBtn="#edit-record-2" //This is the edit btn for the 2nd record of the table.
    firstName="#firstName-wrapper"
    lastName="#lastName-wrapper"
    age="input[id='age']"
    email="#userEmail-wrapper"
    salary="#salary-wrapper"
    department="#department-wrapper"
    submitBtn="#submit"


    addANewTableEntry(FirstName,LastName,Age,Email,Salary,Department)
    {

        cy.get(this.addBtn).click();
        cy.get(this.firstName).click().type(FirstName)
        cy.get(this.lastName).click().type(LastName)
        cy.get(this.age).type(Age)
        cy.get(this.email).click().type(Email)
        cy.get(this.salary).click().type(Salary)
        cy.get(this.department).click().type(Department)
        cy.get(this.submitBtn).click();

    }


    editTableEntry(FirstName,LastName)
    {

        cy.get(this.editBtn).click();
        cy.get(this.firstName).clear().type(FirstName)
        cy.get(this.lastName).clear().type(LastName)
        cy.get(this.submitBtn).click();

    }


}
export default WebTable