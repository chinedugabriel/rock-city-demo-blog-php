let showMusicalCarrier = document.getElementById("musical-carrier-yes");
let hideMusicalCarrier = document.getElementById("musical-carrier-no");



let addMusicalRole = document.getElementById("input-musical-role");
let outPutRole = document.getElementById("musical-role");

// individual carrier that is added to the DOM
let musicCarrier = document.getElementsByClassName("music-intrest");

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



addMusicalRole.addEventListener("change",()=>{
    let result = addMusicalRole.value;
    arr = result.trim().split(" ");

    addToDom();

// this event helps to clear the input of previous value in the input for new value to be added to the DOM
addMusicalRole.addEventListener("click",()=>{
    addMusicalRole.value = "";
});

});

