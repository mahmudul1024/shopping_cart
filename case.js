//btn_case_plus2
//case_number_field2
//case_totalid2


// ******************************************************************************
//****************************************Common Code */





function caseUpdateTotalPrice(new_Case_Number){
    const TotalCasePrice=new_Case_Number*59

    const case_TotalText= document.getElementById('case_totalid2')
    case_TotalText.innerText=TotalCasePrice
    
}


// ******************************************************************************
//****************************************Plus btn event handler of Case */
document.getElementById('btn_case_plus2').addEventListener('click', function(){
const new_Case_Number= update_Quantity(true ,'case_number_field2')
caseUpdateTotalPrice(new_Case_Number)

})

// ******************************************************************************
//****************************************Minus btn event handler of Case */

document.getElementById('btn_case_minus2').addEventListener('click', function(){
const new_Case_Number= update_Quantity(false,'case_number_field2')
caseUpdateTotalPrice(new_Case_Number)


})