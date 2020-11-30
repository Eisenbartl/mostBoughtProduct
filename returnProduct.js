// given a list of products bought, return the product that occurs most in the list.
// if two products occur an equal number of times, sort alphabetically and return the product at the end of the list

const displayProduct = (arr) => {
    const results = {};
    
    // make an object containing products and amount of each bought
    for (let i = 0; i < arr.length; i++) {
        if (results[arr[i]]) {
            results[arr[i]] += 1;
        } else {
            results[arr[i]] = 1;
        }
    }
    
    let most = 0;
    const array = [];
    
    // find most amount of times a product was bought 
    for (let keys in results) {
        results[keys] > most ? most = results[keys] : null ;
    }
    
    // push products matching the most variable number to array
    for (let item in results) {
        results[item] === most ? array.push(item) : null ;
    }
    
    const sorted = array.sort(); // sort alphabetically in case of multiple products
    console.log(sorted[sorted.length - 1]); // return the last product in the array
}

// const productsSold = ['redShirt', 'redShirt', 'greenPants', 'blueTie', 'blueTie', 'redShirt', 'blueTie', 'orangeShoes', 'blueTie', 'blackPants', 'blackPants'];
// const productsSold = ['redShirt', 'redShirt', 'greenPants', 'blueTie', 'blueTie', 'redShirt', 'orangeShoes', 'blueTie', 'blackPants', 'blackPants'];
// const productsSold = ['redShirt', 'blueTie', 'blackPants', 'redShirt', 'blackPants', 'orangeShoes', 'blueTie', 'blackPants'];

displayProduct(productsSold);