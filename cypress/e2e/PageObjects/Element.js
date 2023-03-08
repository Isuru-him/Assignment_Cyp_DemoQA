import BrokenLinksImage from "./BrokenLinksImage";
import WebTable from "./WebTable";

class Element{


    navigateToComponent(Type){

        if(Type=='Web Tables')
        {
            cy.contains(Type).click();;
            return new WebTable();

        }else if(Type=='Broken Links - Images'){

            cy.contains(Type).click();;
            return new BrokenLinksImage();

        }

    }


}
export default Element