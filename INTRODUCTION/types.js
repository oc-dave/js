// let obj = {
//     name: 'David',
//     age : 21,
//     cohort : 17
// }
// console.log(obj.name);
// console.log(obj["cohort"]);
// console.log(obj);

let obj = {
    id : "54321",
    availability : "true",
    count : "5",
    Name : "Dave",
    author : "Okechukwu"
}


console.log("id->",  Number(obj.id).valueOf());
console.log("availability->", Boolean(obj.availability).valueOf());
console.log("count->", Number(obj.count).valueOf());
console.log("name->", String(obj.Name).valueOf());
console.log("author->", String(obj.author).valueOf());
console.log(obj);