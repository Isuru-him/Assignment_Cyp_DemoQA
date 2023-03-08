describe("API Testing", function(){


    it("Creation of user account", function(){


        cy.request({

            method:'POST',

            url:'https://demoqa.com/swagger/#/Account/AccountV1UserPost',

            body:{

                
                    "userName": "Isuru",
                    "password": "abc@123"
                 

            },

            headers:{

                'content-type' : 'application/json'
            }


        }).then(function(response){

            expect(response.status).eq(200)
            expect(response.statusText).not.eq('not ok')

            //expect(response.body).have.property('json')

            /*
            expect(response.body).to.deep.equal({

                "userName": "Isuru",
                "password": "abc@123"


            })

            */
        })


    })


    it("Add a list of books", function(){


        cy.request({

            method:'POST',

            url:'https://demoqa.com/swagger/#/BookStore/BookStoreV1BooksPost',

            body:{

                
                "userId": "Isuru",
                "collectionOfIsbns": [
                  {
                    "isbn": "him-123"
                  }
                ]
                 

            },

            headers:{

                'content-type' : 'application/json'
            }


        }).then(function(response){

            expect(response.status).eq(200)
            expect(response.statusText).not.eq('not ok')

 
        })


    })


    it("Remove one of the added books", function(){


        cy.request({

            method:'DELETE',

            url:'https://demoqa.com/swagger/#/BookStore/BookStoreV1BookDelete',

            body:{

                
                    "isbn": "him-123",
                    "userId": "Isuru"
          
                 

            },

            headers:{

                'content-type' : 'application/json'
            }


        }).then(function(response){

            expect(response.status).eq(200)
            expect(response.statusText).not.eq('not ok')

 
        })


    })


})