let GroceryItems = [
    {itemno:1 , itemdesc:"banana" , price: "10"} ,
    {itemno:2 , itemdesc:"mango" , price: "10"} ,
    {itemno:2 , itemdesc:"papaya" , price: "8"} ,
    {itemno:3 , itemdesc:"tragonFruit" , price: "20"}

];
console.log(typeof(GroceryItems));
console.log(GroceryItems);
var result = GroceryItems.find((ipItem) => { return ipItem.itemdesc == 'mango' ;}) ;
var affordableFruits =  GroceryItems.filter((ipValue,ipIndex,ipArray) => ipValue.price <= 10)
console.log('available mango ? \n ' , result , '\n');

console.log('affordable fruits ? \n' , affordableFruits);
