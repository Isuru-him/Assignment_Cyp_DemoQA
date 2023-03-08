import AlertFrameWindow from "./AlertFrameWindow";
import BookStoreApplication from "./BookStoreApplication";
import Form from "./Form";
import Interaction from "./Interaction";
import Widget from "./Widget";
import Element from "./Element";

class homePage{



     ElementsWebElement = '.category-cards div.card:nth-of-type(1)';
     FormssWebElement = '.category-cards div.card:nth-of-type(2)';
     AlertsFamesWindowsWebElement = '.category-cards div.card:nth-of-type(3)';
     WidgetsWebElement = '.category-cards div.card:nth-of-type(4)';
     InteractionsWebElement = '.category-cards div.card:nth-of-type(5)';
     BookStoreApplicationWebElement = '.category-cards div.card:nth-of-type(6)';


     clickOnButton(Type){

        if(Type=='Elements')
        {
            cy.get(this.ElementsWebElement).click();
            return new Element();

        }else if(Type=='Forms'){

            cy.get(this.FormssWebElement).click();
            return new Form();

        }else if(Type=='AlertsFramesWindows'){

            cy.get(this.AlertsFamesWindowsWebElement).click();
            return new AlertFrameWindow();

        }else if(Type=='Widgets'){

            cy.get(this.WidgetsWebElement).click();
            return new Widget();

        }else if(Type=='Interactions'){

            cy.get(this.InteractionsWebElement).click();
            return new Interaction();

        }else if(Type=='Book Store Application'){

            cy.get(this.BookStoreApplicationWebElement).click();
            return new BookStoreApplication();
        }

     }

}

export default homePage;