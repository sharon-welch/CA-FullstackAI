// ALGORITHM 1
//  Catan => c:1 a:2 t:1 n:1

//PSEUDOCODE
// create some kind of storage, object
// arrays are good for storing things in sequentail order but they aren't goood for look uppercase
// objects are good for lookups and don't store things in order; with string algorithms you are usually using object 
// loop throught the string 
// check to see if character we are at is in the lookup: 
// if its not = 1
// it is increment by 1 

// create an interface for lookup to define type 
interface Lookup {
    // storing key as the string, and value as the string 
    // word key can be any word
    [key: string] : number;
}

function charCount(str: string) {
    // use const because don't want someone to change the object 
    // for object almost always use const
    const lookup: Lookup = {};

    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(lookup[char] === undefined){
            lookup[char] = 1;
        }else{ 
            lookup[char] += 1;
        }
    }
    return lookup;
}

console.log(charCount('Catan'));


// ALGORTHM 2
// Testtesttest => 12

// PSEUDOCODE
// variable to store count 
// start at 0
// loop through 
// add one for every char 
// if string is null, return 0 
// retunr count


function count(str:string){
    let x = 0; 
    for(let i=0; i<str.length; i++){
        x += 1; 
    }
    return x;
}

console.log(count("candy"));