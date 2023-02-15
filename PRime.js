function PRime (x){
    //menentukan bilangan prima atau bukan

    for(let i = 2 ; i < x ; i++){
        if (x % i == 0){
            console.log ("bukan bilangan prima")
            return false
        }

    }   
            console.log("bilangan prima")
            return true
}

//console.log (PRime(10))

module.exports ={
    PRime
}