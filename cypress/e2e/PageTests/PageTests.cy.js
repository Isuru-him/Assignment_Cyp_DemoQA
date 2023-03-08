import homePage from "../PageObjects/homePage";
import WebTable from "../PageObjects/WebTable";
import Form from "../PageObjects/Form";
import Interaction from "../PageObjects/Interaction";
import Widget from "../PageObjects/Widget";
import Element from "../PageObjects/Element";
//import { pkgVersion } from "cypress/lib/util";





/* Here we initialize the imported classes objects */
const hp = new homePage();

/* 
The webElements which are needed for the verification purposes have been declared 
and initialized here
*/
let forthRowTableCellOne= ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(1)"
let forthRowTableCelltwo= ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(2)"
let forthRowTableCellthree= ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(3)"
let forthRowTableCellfour= ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(4)"
let forthRowTableCellfive= ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(5)"
let forthRowTableCellsix= ".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(6)"

let secondRowTableCellone= ".rt-tbody .rt-tr-group:nth-of-type(2) div .rt-td:nth-of-type(1)"
let secondRowTableCelltwo= ".rt-tbody .rt-tr-group:nth-of-type(2) div .rt-td:nth-of-type(2)"

let brokenImageLink ="img[src='/images/Toolsqa_1.jpg"
let unbrokenImageLink="img[src='/images/Toolsqa.jpg"

let progressBarIcon="div[style='width: 100%;']"

let droppingPlace='#droppable'

let formSuccessMessage='Thanks for submitting the form'
let formName='Gerimedica BV'
let formEmail='test@test.com'
let formGender='Male'
let formMobile='0123456789'
let formDOB='15 January,1990'
let formHobby='Reading'
let formPhoto='pp.jpg'
let formAddress='Netherlands'

describe("Geremedica Testing", function(){

    it("TC01 - Verify user can enter new data into the table", function(){



        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')

        
        const we =hp.clickOnButton("Elements");
        const wt = we.navigateToComponent("Web Tables");
        wt.addANewTableEntry("Alden","Cantrell","30","test@test.com","12345","QA")

        //verification

        cy.get(forthRowTableCellOne).click().contains("Alden")
        cy.get(forthRowTableCelltwo).click().contains("Cantrell")
        cy.get(forthRowTableCellthree).click().contains("30")
        cy.get(forthRowTableCellfour).click().contains("test@test.com")
        cy.get(forthRowTableCellfive).click().contains("12345")
        cy.get(forthRowTableCellsix).click().contains("QA")
       

    })

    
    it("TC02 - Verify user can edit the row in a table", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')

        const we =hp.clickOnButton("Elements");
        const wt = we.navigateToComponent("Web Tables");
        wt.editTableEntry("Gerimedica","BV")


        //verifying the data editted using chai and mocha
        
        cy.get(secondRowTableCellone).click().contains("Gerimedica")
        cy.get(secondRowTableCelltwo).click().contains("BV")



    })



    it("TC03 - Verify broken image", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')

        const we =hp.clickOnButton("Elements");
        const wt = we.navigateToComponent("Broken Links - Images");

        /*
        via this verification point the item located is checked for its visibility first and then it is verified for 
         its availability, if it is available natural width cant be 0

         vice-versa is also been verified simultaniously, the 2nd image is available hence it is expected to have its natural 
         width greater than 0

         */

        cy.get(brokenImageLink).should('be.visible').and(img =>{ expect(img[0].naturalWidth).to.eq(0)})


        cy.get(unbrokenImageLink).should('be.visible').and(img =>{ expect(img[0].naturalWidth).to.gt(0)})


        

    })


    it("TC04 - Verify user can submit the form", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')

        const formz =hp.clickOnButton("Forms");
        const pf = formz.navigateToComponent("Practice Form");
        pf.fillTheForm('Gerimedica','BV','test@test.com','male','0123456789','1990','Jan','15','Maths','Reading','Netherlands','Rajasthan','Jaipur');

        //verification of the form submission


        cy.contains(formSuccessMessage).should('be.visible')
        cy.contains(formName).should('be.visible')
        cy.contains(formEmail).should('be.visible')
        cy.contains(formGender).should('be.visible')
        cy.contains(formMobile).should('be.visible')
        cy.contains(formDOB).should('be.visible')
        cy.contains(formHobby).should('be.visible')
        cy.contains(formPhoto).should('be.visible')
        cy.contains(formAddress).should('be.visible')

    })


    it("TC05 - Verify the progress bar", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')

        const wid =hp.clickOnButton("Widgets");
        const pb =wid.navigateToComponent("Progress Bar")
        pb.clickStartBtn();

      

    
        
        cy.wait(8000)
        //There exist an uncaughtable exception in this page but handled via a code snippet through e2e.js file under support folder.
        cy.get(progressBarIcon).should('be.visible')

        //verifying the background color of a web-element
        cy.get(progressBarIcon).should('have.css', 'background-color', 'rgb(40, 167, 69)')


    })

    it("TC06 - Verify the tooltip", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')

        const wid =hp.clickOnButton("Widgets");
        const tt =wid.navigateToComponent("Tool Tips")
       
        tt.hover();
        //verifying the tooltip
        cy.contains('You hovered over the Button')

        

    })


    it("TC07 - - Verify user can drag and drop", function(){


         cy.visit('https://demoqa.com/')

         const inter =hp.clickOnButton("Interactions");
         const drop =inter.navigateToComponent("Droppable")
         drop.dropHere();

        

          //asserting whether dragged. assumption - if dragged destination element's background turns to blue 

          cy.get(droppingPlace).should('have.css', 'background-color', 'rgb(70, 130, 180)')


         

    })



})