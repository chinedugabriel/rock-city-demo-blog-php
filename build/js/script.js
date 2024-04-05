// radio button veriable
let showMusicalCarrier = document.getElementById("musical-carrier-yes");
let hideMusicalCarrier = document.getElementById("musical-carrier-no");


// musical carrier veriable
let addMusicalRole = document.getElementById("input-musical-role");
let outPutRole = document.getElementById("musical-role");

// individual carrier that is added to the DOM
let musicCarrier = document.getElementsByClassName("music-intrest");

// Password inputs
let firstPasswordIntput = document.getElementById("firstPasswordInput");
let secondPasswordInput = document.getElementById("secondPasswordInput");
// Password alert veriable
let passwordAlertText = document.getElementById('password-alert');

// Registration form veriable
let submitButtonForResitration = document.getElementById("register-form");
// disabled the submit button here
submitButtonForResitration.disabled = true;

// this veriable carries all carrier item phased from the input..
let arr = [];

// hide carrier input section by default
if (hideMusicalCarrier.checked == true){
    addMusicalRole.style.display = "none";
    outPutRole.style.display = "none";
}

// this hides the carrier input section
hideMusicalCarrier.addEventListener('click',()=>{
    if (hideMusicalCarrier.checked){
        addMusicalRole.style.display = "none";
        outPutRole.style.display = "none";
    }
});
// this shows the carrier input section 
showMusicalCarrier.addEventListener('click',()=>{
    if (showMusicalCarrier.checked){
        addMusicalRole.style.display = "flex";
        outPutRole.style.display = "flex";
    }
});


// this function add the list of input into the Dom and also loops through the class "music-intrest" items and removes the when the user clicks on an individual carrier item..
function addToDom(){
    for(let i =0; i < arr.length; i++){
    outPutRole.innerHTML +=` <div class='music-intrest border border-black w-1/5 md:w-1/4 py-1 md:py-2 rounded-full flex justify-center items-center text-xs lg:text-base'>${arr[i].replace(/,/g, "")}</div>`;

}

// helps to remove an item from the Dom
for(let i = 0; i < musicCarrier.length; i++){
    musicCarrier[i].addEventListener('click',(event)=>{event.target.remove() });
}



}


// this event adds each item listed in the input to the Dom
addMusicalRole.addEventListener("change",()=>{
    let result = addMusicalRole.value;
    arr = result.trim().split(" ");

    addToDom();

// this event helps to clear the input of previous value in the input for new value to be added to the DOM
addMusicalRole.addEventListener("click",()=>{
    addMusicalRole.value = "";
});

});


// function that checks the password Strength
passwordAlertText.style.display = "none";
function passwordStrengthChecker(){
    // this display the passwordIndicatorSection when the password input change
    passwordAlertText.style.display = "flex";
    
    // this checks the characters in the password input  
    if(firstPasswordIntput.value.length <=4){
        // console.log("it's working");
        passwordAlertText.innerHTML = "weak password";
        passwordAlertText.style.color = "red";

    }else if(firstPasswordIntput.value.length <=6 && /[0-9]/.test(firstPasswordIntput.value)&& /[a-z]/.test(firstPasswordIntput.value)){
        passwordAlertText.innerHTML = "medium";
        passwordAlertText.style.color = "yellow";
        
    }else if(/[\d]/.test(firstPasswordIntput.value)&& /[a-z]/.test(firstPasswordIntput.value)&& /[A-Z]/.test(firstPasswordIntput.value) && /[\b@#$%!^&*()_+=><?/['\]'{}]/.test(firstPasswordIntput.value)){
        passwordAlertText.innerHTML = "Very strong";
        passwordAlertText.style.color = "#564E82";
    }
    else if( /[a-z]/.test(firstPasswordIntput.value) && /[@#$%!^&*()_+=><?/['\]'{}]/.test(firstPasswordIntput.value)){
        passwordAlertText.innerHTML = "strong";
        passwordAlertText.style.color = "orange";
        
    }
}

// passwordStrengthChecker function is used here
firstPasswordIntput.addEventListener('input',passwordStrengthChecker);


function passwordMatchChecker(){

    if(firstPasswordIntput.value === secondPasswordInput.value){
        passwordAlertText.innerHTML = "Password Matched";
        passwordAlertText.style.color = "#564E82";
        // enabled the submit button
        submitButtonForResitration.disabled = false;

    }else{
        passwordAlertText.innerHTML = "Your password doesn't match!!";
        passwordAlertText.style.color = "red";
        // disabled submit button
        submitButtonForResitration.disabled = true;

    }

}

secondPasswordInput.addEventListener('input', passwordMatchChecker);

// the button check if the password matches before it is enabled
submitButtonForResitration.addEventListener('click', passwordMatchChecker);


