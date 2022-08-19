//btn_case_plus2
//case_number_field2
//case_totalid2


// ******************************************************************************
//****************************************Common Code */






// ******************************************************************************
//****************************************Plus btn event handler of Case */
document.getElementById('btn_case_plus2').addEventListener('click', function(){
const new_Case_Number= update_Quantity(true ,'case_number_field2')
UpdateTotalPrice(new_Case_Number ,false)

})

// ******************************************************************************
//****************************************Minus btn event handler of Case */

document.getElementById('btn_case_minus2').addEventListener('click', function(){
const new_Case_Number= update_Quantity(false,'case_number_field2')
UpdateTotalPrice(new_Case_Number ,false)


})