class ToolTip{

    tooltipBtn='#toolTipButton'

    hover(){
        cy.get(this.tooltipBtn).trigger('mouseover').invoke('show')
    }


}
export default ToolTip;