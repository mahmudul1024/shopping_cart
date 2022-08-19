
//****************************************Common Code */

// ******************************************************************************
//****************************************Plus btn event handler of Case */
document.getElementById('btn_case_plus2').addEventListener('click', function(){
const new_Case_Number= update_Quantity(true ,'case_number_field2')
UpdateTotalPrice(new_Case_Number ,false)
const subTotalCopy1=SubTotalCalculate()
const TaxTotalCopy= TaxCalculate(subTotalCopy1)

// calculate final total
finalTotal(subTotalCopy1, TaxTotalCopy)
})

// ******************************************************************************
//****************************************Minus btn event handler of Case */

document.getElementById('btn_case_minus2').addEventListener('click', function(){
const new_Case_Number= update_Quantity(false,'case_number_field2')
UpdateTotalPrice(new_Case_Number ,false)
const subTotalCopy1=SubTotalCalculate()
const TaxTotalCopy= TaxCalculate(subTotalCopy1)

// calculate final total
finalTotal(subTotalCopy1, TaxTotalCopy)

})