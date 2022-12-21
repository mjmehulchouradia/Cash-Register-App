const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");

const message=document.querySelector("#error-message");

const notes = [2000,500,100,50,20,10,5,1];

const noOfNotes=document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validateBillAndCash() 
{
    message.style.display="none";
    console.log(cashGiven.value);
    console.log(billAmount.value);
  if(billAmount.value > 0) 
  { 
    if(cashGiven.value >= billAmount.value)
    {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
    }
    else{
        showMessage("The cash provide should be atleast equal to bill amount");
    }
  }else{
    showMessage("The bill amount should be greate than 0");
  }
});

function showMessage(msg)
{
    message.style.display="block";
    message.innerText=msg;
}

function calculateChange(amt)
{ 
    // console.log("Hi");
   for(let i=0;i<8;i++)
   {
    const numberOfNotes=Math.trunc(amt/notes[i]);
    // console.log(numberOfNotes);
    amt=amt%notes[i];
    // console.log(amt);
    noOfNotes[i].innerText=numberOfNotes;
   }
}