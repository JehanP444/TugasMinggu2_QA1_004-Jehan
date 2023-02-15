function PR1(input){
input = input.toLowerCase()
//let n = ("hello world")
const abj ={};
    let hasil = ""
    for (let i = 0 ; i < input.length ;i++){
         const x = input[i]; 
         if (!abj[x]){
            abj[x] = 0;
         }
         abj[x]++;
    }
    for (let j in abj){
    //obj tidak mulai dari 0

        hasil += (j +" = "+ abj[j]) + "\n"
    }
return hasil }

//console.log (PR1(""))

module.exports ={
    PR1
}