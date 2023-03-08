class ProgressBar{


    startBtn = "Start"


    clickStartBtn(){

        cy.contains(this.startBtn).click();
    }


}
export default ProgressBar;