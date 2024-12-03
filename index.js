var customerName = 'bob';
var bestCustomer;  

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';  
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';  
}

const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Charlie';  
}
