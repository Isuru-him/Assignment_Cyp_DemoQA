describe("Geremedica Testing", function(){

    it("TC01 - Verify user can enter new data into the table", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')
        cy.get(".category-cards div.card:nth-of-type(1)").click();

        //navigates to another page 2nd page
        cy.contains("Web Tables").click();
        cy.get("#addNewRecordButton").click();
        
        //filling the form
        cy.get("#firstName-wrapper").click().type("Alden")
        cy.get("#lastName-wrapper").click().type("Cantrell")
        cy.get("#userEmail-wrapper").click().type("test@test.com")
        cy.get("input[id='age']").type("30")
        cy.get("#salary-wrapper").click().type("12345")
        cy.get("#department-wrapper").click().type("QA")
        cy.get("#submit").click();


        

        //first verify whether row has been created in the table 
        cy.get("#edit-record-3").should('be.visible')
        
        //verifying the data entered present in each cell

        cy.get(".rt-tbody .rt-tr-group:nth-of-type(4) div .rt-td:nth-of-type(1)").click().contains("Alden")
        cy.get(".rt-tbody .rt-tr-group:nth-of-type(4) div div:nth-of-type(2)").click().contains("Cantrell")
        cy.get(".rt-tbody .rt-tr-group:nth-of-type(4) div div:nth-of-type(3)").click().contains("30")
        cy.get(".rt-tbody .rt-tr-group:nth-of-type(4) div div:nth-of-type(4)").click().contains("test@test.com")
        cy.get(".rt-tbody .rt-tr-group:nth-of-type(4) div div:nth-of-type(5)").click().contains("12345")
        cy.get(".rt-tbody .rt-tr-group:nth-of-type(4) div div:nth-of-type(6)").click().contains("QA")

    })

    
    it("TC02 - Verify user can edit the row in a table", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')
        cy.get(".category-cards div.card:nth-of-type(1)").click();

        //navigates to another page 2nd page
        cy.contains("Web Tables").click();
        cy.get("#edit-record-2").click();
        
        //editting the form

        cy.get("#firstName-wrapper").clear().type("Gerimedica")
        cy.get("#lastName-wrapper").clear().type("BV")
        cy.get("#submit").click();

        //verifying the data editted using chai and mocha
        
        cy.get(".rt-tbody .rt-tr-group:nth-of-type(2) div .rt-td:nth-of-type(1)").click().contains("Gerimedica")
        cy.get(".rt-tbody .rt-tr-group:nth-of-type(2) div div:nth-of-type(2)").click().contains("BV")



    })



    it("TC03 - Verify broken image", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')
        cy.get(".category-cards div.card:nth-of-type(1)").click();





        //navigates to another page 2nd page
        cy.contains("Broken Links - Images").click();

        /*
        via this verification point the item located is checked for its visibility first and then it is verified for 
         its availability, if it is available natural width cant be 0

         vice-versa is also been verified simultaniously, the 2nd image is available hence it is expected to have its natural 
         width greater than 0

         */

        cy.get("img[src='/images/Toolsqa_1.jpg']").should('be.visible').and(img =>{ expect(img[0].naturalWidth).to.eq(0)})


        cy.get("img[src='/images/Toolsqa.jpg']").should('be.visible').and(img =>{ expect(img[0].naturalWidth).to.gt(0)})


        

    })


    it("TC04 - Verify user can submit the form", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')
        cy.get(".category-cards div.card:nth-of-type(2)").click();





        //navigates to another page 2nd page
        cy.contains("Practice Form").click();


        //form submission part pending

        

    })


    it("TC05 - Verify the progress bar", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')
        cy.get(".category-cards div.card:nth-of-type(4)").click();





        //navigates to another page 2nd page
        cy.contains("Progress Bar").click();
        cy.contains("Start").click();
        
        cy.wait(8000)
        //There exist an uncaughtable exception in this page but handled via a code snippet through e2e.js file under support folder.
        
        cy.get('div[style="width: 100%;"]').should('be.visible')

        //verifying the background color of a web-element
        cy.get('div[style="width: 100%;').should('have.css', 'background-color', 'rgb(40, 167, 69)')


        

    })

    it("TC06 - Verify the tooltip", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')
        cy.get(".category-cards div.card:nth-of-type(4)").click();





        //navigates to another page 2nd page
        cy.contains("Tool Tips").click();
       

        //you hovered over the Button and simmultaniously trying to read the toop tip in chained cmds
        cy.get('#toolTipButton').trigger('mouseover').invoke('show')
        cy.contains('You hovered over the Button')

        

    })


    it("TC07 - - Verify user can drag and drop", function(){

        //Landing page - 1st page 
        cy.visit('https://demoqa.com/')
        cy.get(".category-cards div.card:nth-of-type(5)").click();





        //navigates to another page 2nd page
        cy.contains("Droppable").click();

        // for this you need the support of a plugin first you need to install the npm package as a dev dependency
       
        //then you need to get your source (the item you wish to drag) into a variable
        const source = cy.get('#draggable')


        //"draggable is the css selector value of the destination"
        source.drag('#draggable', {
            force: true,
            target: {
              // moving the source to the target value in %
              x: 230,
              y: 40,
            },
          });

          //asserting whether dragged. assumption - if dragged destination element's background turns to blue 

          cy.get('#draggable').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')


    })



})