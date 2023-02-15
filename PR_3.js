function PR3(n){
const huruf = ["K","U","N","C","I","E"]
let hasil = ""


for (let i=0; i < n ; i ++){
//i sebagai baris
    
    let k = 0
    for (let j=0; j <=i ;j ++){      
//j sebagai kolom
        if(k>=huruf.length)
//jika hurufnya mengulang lagi maka
            k = 0
//hurufnya mulai dari huruf pertama (ke 0) lagi    
        hasil = hasil + huruf[k] + " "
        k++
    }  
    hasil += "\n" //enter
}
return hasil
}

//console.log(PR3(12))

module.exports ={
    PR3
}
