let input_data=document.querySelectorAll(".formSection .form-control");
let display_output=document.querySelector(".tbody");
const btn_submit=document.querySelector("#btn_submit");

let user_data=[];

function validateInput(){
    for (let i=0; i<input_data.length; i++){
        if(input_data[i].value=="" || input_data[i].value==null){
            input_data[i].nextElementSibling.textContent="field is required";
            return
        }else {
            input_data[i].nextElementSibling.textContent="";
        }
    }
    createUser(displayData);
}
function createUser(display){
    let current_date=new Date();
    let current_year=current_date.getFullYear();
    let dob_date=new Date(input_data[2].value);
    let dob_year=dob_date.getFullYear();
    let age=current_year - dob_year;

    let new_user={
        names: input_data[0].value + " " + input_data[1].value,
        age:age,
        phone: input_data[4].value,
        gender:input_data[3].value,
        email: input_data[5].value
    }
    user_data.push(new_user);
    input_data[0].value="";
    input_data[1].value="";
    input_data[2].value="";
    input_data[3].value="";
    input_data[4].value="";
    input_data[5].value="";
    display();
}
function displayData(){
    let output="";
    user_data.forEach(({names,email,gender,age,phone},index)=>{
        output +=`
        <tr>
            <td>${index+1}</td>
            <td>${names}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${age} years</td>
            <td>${phone}</td>
        </tr>
            `
    })
    display_output.innerHTML=output;
}

btn_submit.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
})
