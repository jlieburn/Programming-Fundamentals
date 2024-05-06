
//Variables
var rxCounter = 0;
var rxNumber = "";
var vistRecord = "";
var cost = 0;
var total = 0;
var output = "";

//Functions
function calculateTotal() {
  
//Loop
  while (true) {
    var rxNumber = prompt("Please enter prescription number (or 0 to exit):");
     
//If statement to end loop
    if (rxNumber === "0") {
      break;    
    }
//Increment counter
    rxCounter++;
    
// Prompts 
    while (true) {    
       var visitRecord = prompt("Does record belong to clinic and patient had an appointment? (yes/no)"); 
        if (visitRecord ==="yes" || visitRecord === "no") {
            break;
        }
        alert("Invalid input. Please enter 'yes' or 'no'.");
    }
    
    var cost = prompt("Please enter cost of medication for Rx number " + rxNumber + ":");
    
//Convert to number
    cost = Number(cost);
    
    if (cost === 0) {
        output += "You must reprocess prescription number " + rxNumber + " due to invalid cost entered.<br>";
        continue;  
    }
    
        if (isNaN(cost)) {
        output += "You must reprocess prescription number " + rxNumber + " due to invalid cost entered.<br>";
        continue;  
    }
    
//Discount
    if (visitRecord === "yes") {
      var discount = cost * 0.1;
      cost -= discount;
    } 
//Add pharmacy processing fee
    cost += 5;
    total += cost;
    
//Display
    output += "Prescription number " + rxNumber + " is " + (visitRecord ==="yes" ? "ELIGIBLE" : "NOT ELIGIBLE") + ". Total is $ " + total.toFixed(2) + "<br>";
  }
  document.write(output)
//Line Break
  document.write("<strong>Thank you for using this program!<br></strong>");
  document.write("<br>");
  document.getElementById("counterValue").innerText = rxCounter;
  document.getElementById("prescriptionCount").innerText = "We have calculated" + rxCounter + " prescriptions!";

 }
 calculateTotal();

   

