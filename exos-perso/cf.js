
function calculateBill(bill, tax){
    let total = bill * (1 + tax);
    return total; 
}

console.log(`My total is: ${calculateBill(100,0.15)}$`);