const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainCount = document.getElementById("Remaining-counter");


let char = 0;


const updateCounter = () => {
    userChar = charVal.value.length;
    totalCount.innerText = userChar;
    remainCount.innerText=250-userChar;
    

};
charVal.addEventListener('keyup',() => updateCounter());


//to copy the text code

const CopyText = () =>{
    charVal.select();
    charVal.setSelectionRange(0,9999); //for mobile version
    navigator.clipboard.writeText(charVal.value);
};