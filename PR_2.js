//if 
function PR2(n){

if (n < 10 && n >= 1){
    return ("satuan")
}
else if (n >= 10 && n < 100){
    return("puluhan")
}else if (n >= 100 && n < 1000){
    return("ratusan")
}else if (n >= 1000 && n < 10000){
    return("ribuan")
}else if (n >= 10000 && n < 100000){
    return("puluh ribuan")
}else{
    return("input tidak valid")
    }
}

//Switch

function PR2b(n){

switch (true) {
    case (n < 10 ) : 
        return("satuan")
        break
    case (n<100) :
        return("puluhan")
        break
    case (n<1000) :
        return("ratusan")
        break
    case (n<10000):
        return("ribuan")
        break
    case (n<100000):
        return("puluh ribuan")
        break
    default :
        return ("input tidak valid")
}
}

//console.log(PR2(100))
//console.log(PR2b(1))

module.exports ={
    PR2,
    PR2b
}

