const cats = [ "Milo" , "Otis" , "Garfield" ]; // Write your solution here!

function destructivelyAppendCat(Ralph) { 
    cats.push(`Ralph`);
    return cats;
}
function destructivelyPrependCat(Bob) {
    cats.unshift('Bob');
    return cats;
}
function destructivelyRemoveLastCat(Garfield) {
    cats.pop('Garfield');
    return cats;
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift('Milo');
    return cats;
}
function appendCat(Broom) {
    const newAppendCatArray = [ ...cats , 'Broom'];
    console.log(cats);
    return newAppendCatArray;
}
function prependCat(Arnold) {
    const newPrependCatArray = ['Arnold' , ...cats];
    console.log(cats);
    return newPrependCatArray;
}
function removeLastCat(Garfield) {
    const lastCatRemoved = cats.slice(0 , -1);
    return lastCatRemoved;
}
function removeFirstCat(Milo) {
    const firstCatRemoved = cats.slice(1);
    return firstCatRemoved;
}