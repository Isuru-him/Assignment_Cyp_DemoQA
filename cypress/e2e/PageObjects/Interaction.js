import Droppable from "./Droppable";

class Interaction{

    navigateToComponent(Type){

        if(Type=='Droppable')
        {
            cy.contains(Type).click();
            return new Droppable();

        }

    }


}
export default Interaction