import PracticeForm from "./PracticeForm";

class Form{


    navigateToComponent(Type){

        if(Type=='Practice Form')
        {
            cy.contains(Type).click();;
            return new PracticeForm();

        }

    }



}
export default Form