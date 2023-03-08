import ProgressBar from "./progressBar";
import ToolTip from "./ToolTip";

class Widget{

    navigateToComponent(Type){

        if(Type=='Progress Bar')
        {
            cy.contains(Type).click();
            return new ProgressBar();

        }else if(Type=='Tool Tips')
        {
            cy.contains(Type).click();
            return new ToolTip();

        }

    }


}
export default Widget