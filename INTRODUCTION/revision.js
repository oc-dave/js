function weekend(vibes, chills){
    let withLinda = vibes();
    let withKemi = chills();

    return withLinda, "+", withKemi;
}

function a(){
    return "Filled with Vibes & Inshallah"
}

function b(){
    return "Netflix,Chills and Happy Hour "
}

// console.log(
//     () => {return "Praying and Fasting"},
//     () => {return "Reading the word, and Speaking in tongues"}
// )

console.log(weekend(a,b))
