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