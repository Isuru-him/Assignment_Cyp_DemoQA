class PracticeForm{

    firstName="#firstName"
    lastName="#lastName"
    email ="#userEmail"
    genderMale=".custom-radio:nth-of-type(1)"
    hobbies='#hobbies-checkbox-2'
    mobileNum="#userNumber"
    dob="#dateOfBirthInput"
    subjects=".subjects-auto-complete__control"
    state="#state"
    city="#city"
    currentAddress="#currentAddress"
    uploadBtn='#uploadPicture'

    submitBtn="#submit"

    

    fillTheForm(firstName,lastName,emailAddress,Male,mobileNumber,year,month,day,subject,hobby,address,state,city){

        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(lastName)

        if(Male=='male'){

            cy.get(this.genderMale).click()
        }
        
        
        cy.get(this.mobileNum).type(mobileNumber)
        
        cy.get(this.dob).type('{selectall}').type(' ')


        
        cy.get(this.dob).click().type(year);
        cy.get(this.email).type(emailAddress)
        cy.get(this.dob).click().type(month);
        cy.get(this.email).clear().type(emailAddress)
        cy.get(this.dob).click()

        if(day=='15'){
            cy.get('.react-datepicker__day--015').click()  
        }
        

        if(hobby=='Reading'){

            cy.get(this.hobbies).click({force:true})
        }
        
        
       //method to upload file.
        this.uploadFile();
        


        cy.get(this.subjects).type(subject).click()

        cy.get(this.currentAddress).type(address)
        


       
        

        cy.get(this.state).click().type(state).type('{enter}')
    
        
        cy.get(this.city).click().type(city).type('{enter}')
        
       cy.get(this.submitBtn).click({force:true})

        
    }

    uploadFile(){

        const fileStorage="cypress/fixtures/image/pp.jpg"
        
        cy.get(this.uploadBtn).selectFile(fileStorage)

    }


}
export default PracticeForm;