function  update_Quantity(isIncrese ,fieldnumber){
    const case_number_field= document.getElementById(fieldnumber)
    const case_numberString=case_number_field.value
    const case_Previous_Number=parseInt(case_numberString)
    let new_Case_Number
    if(isIncrese){
     new_Case_Number=case_Previous_Number+1
    }
    else{
     new_Case_Number=case_Previous_Number-1

    }

    case_number_field.value=new_Case_Number

    return new_Case_Number
}

function UpdateTotalPrice(new_Case_Number ,isPhoneOrCase){
let TotalCasePrice
let case_TotalText
if(isPhoneOrCase){

     TotalCasePrice=new_Case_Number*1219
     case_TotalText= document.getElementById('case_totalid1')
}
else{
    
     TotalCasePrice=new_Case_Number*59
    case_TotalText= document.getElementById('case_totalid2')
}
    



    case_TotalText.innerText=TotalCasePrice  
    
}

function SubTotalCalculate(){
    //subTotal calculate for plus
const subTotalPhoneString=document.getElementById('case_totalid1')
const subTotalPhone=parseInt(subTotalPhoneString.innerText)
const subTotalCaseString=document.getElementById('case_totalid2')
const subTotalCase=parseInt(subTotalCaseString.innerText)
const subTotal= subTotalPhone+subTotalCase

const subTotalText=document.getElementById('subtotalId')
subTotalText.innerText=subTotal

return subTotal
}


function TaxCalculate(subTotalCopy){
    //tax calculate

const TaxTotal=subTotalCopy*0.1
const taxId=document.getElementById('taxId')
const TaxString=TaxTotal.toFixed(2)
const TaxNumber=parseFloat(TaxString)
taxId.innerText=TaxNumber

return TaxNumber
}

// calculate final Total
function finalTotal(Copy1, Copy2){
const finalTotal=Copy1+Copy2
const finalTotalId=document.getElementById('finalTotalid')
finalTotalId.innerText=finalTotal
}