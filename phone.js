
//****************************************Plus btn event handler of Case */
document.getElementById('btn_case_plus1').addEventListener('click', function(){
const new_Case_Number= update_Quantity(true, 'case_number_field1')
UpdateTotalPrice(new_Case_Number, true)
const subTotalCopy1=SubTotalCalculate()
const TaxTotalCopy= TaxCalculate(subTotalCopy1)

// calculate final total
finalTotal(subTotalCopy1, TaxTotalCopy)


})

// ******************************************************************************
//****************************************Minus btn event handler of Case */

document.getElementById('btn_case_minus1').addEventListener('click', function(){
const new_Case_Number= update_Quantity(false ,'case_number_field1')
UpdateTotalPrice(new_Case_Number ,true)
const subTotalCopy1=SubTotalCalculate()
const TaxTotalCopy= TaxCalculate(subTotalCopy1)

// calculate final total
finalTotal(subTotalCopy1, TaxTotalCopy)


})