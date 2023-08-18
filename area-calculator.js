function calculateRectangleArea(target)
{
    const base=target.parentNode.parentNode.childNodes[5].childNodes[1].value
    const height=target.parentNode.parentNode.childNodes[5].childNodes[7].value
    if(!isNaN(base) && !isNaN(height)){
        if(target.parentNode.parentNode.childNodes[1].innerText==='Triangle'){
            const triArea = .5* parseFloat(base) *parseFloat(height)
        setElementInnerText('triangle-area', triArea)
        addToCalcuilationEntry('Tringle',triArea)
        }
        else if(target.parentNode.parentNode.childNodes[1].innerText==='Rectangle')
        {
            const RectangleArea=parseFloat(base) *parseFloat(height)
        setElementInnerText('rectangle-area', RectangleArea)
        addToCalcuilationEntry('Rectangle',RectangleArea)
        }
        else if(target.parentNode.parentNode.childNodes[1].innerText==='parallelogram')
        {
            const  parallelogramArea=parseFloat(base) *parseFloat(height)
        setElementInnerText( 'parallelogram-area', parallelogramArea)
        addToCalcuilationEntry('parallelogram',parallelogramArea)
        }
    }
    else{
        alert("Invalid input")
        return
    }
}

function setElementInnerText(elementId, area){
    document.getElementById(elementId).innerText = area;
    
}
function addToCalcuilationEntry(itemName,value){
    const li = document.createElement("li");
  li.innerText = itemName+':'+ " "+ value+ "   "+'cm²';
  const calculationEntryList=document.getElementById('calculation-entry').appendChild(li);
  calculationEntryList.style.listStyleType = "decimal";
}