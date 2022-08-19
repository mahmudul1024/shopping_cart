

function casePhoneTotalPrice(new_Case_Number){
    const TotalCasePrice=new_Case_Number*1219

    const case_TotalText= document.getElementById('case_totalid1')
    case_TotalText.innerText=TotalCasePrice
    
}


// ******************************************************************************
//****************************************Plus btn event handler of Case */
document.getElementById('btn_case_plus1').addEventListener('click', function(){
const new_Case_Number= update_Quantity(true, 'case_number_field1')
casePhoneTotalPrice(new_Case_Number)
})

// ******************************************************************************
//****************************************Minus btn event handler of Case */

document.getElementById('btn_case_minus1').addEventListener('click', function(){
const new_Case_Number= update_Quantity(false ,'case_number_field1')
casePhoneTotalPrice(new_Case_Number)


})