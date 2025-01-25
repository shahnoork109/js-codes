const myobj = {
    'game1' : "spiderman",
    'game2' : "NFS",
    'game3' : "GTA"

}

for (const key in myobj) {
    // console.log(key);           //for key
    // console.log(myobj[key]);    //for value
    
}

const arr =  [1,2,3,4,5,6,78]
for (const key in arr) {
    console.log(key);
    // console.log(arr[key]);
}


//we can not access element of map using forin loop