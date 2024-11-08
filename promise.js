/*let promise = new Promise((resolve,reject) => {
    resolve({user: "akshay", pass: "12345"});

})

promise.then((data) => {
    console.log(data);
    return data;
}).then(
    (res) => {
        console.log(res.user);
    }
).catch(() => {
    console.log("error");
}).finally(() => {
    console.log("finally");
})
    
*/




/*function roll(num, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("roll no is " +num);
            resolve();
        },delay)
    })
}

roll(12131, 1000).then(() => {
    roll(12132, 2000).then(() => {
        roll(12133, 3000).then(() => {
            console.log("all rolls are done");
        })
    })
}).catch(() =>{
    console.log("error");
})


async function getRoll(){
    let roll1= await roll(1212,1000);
    let roll2= await roll(1213,2000);
    let roll3= await roll(1214,3000);

}
getRoll();
*/


/*function orderfood(num,time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve();
        })
        

    })


}
orderfood(jalebi,1000).then(() => {
    console.log("your time for makig the item is " +time);
})

*/




let url = 'https://api.github.com/users/HelloAkshayGupta';
let b = fetch(url);
b.then((data) => {
    console.log(data)
    return data.json();
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.log("Error");
}).finally(() => {
    console.log("first");
})

async function fetchh(){
    let url= 'https://api.github.com/users';
    let b= await fetch(url);
    let data = await b.json();
    console.log(data);
}
fetchh();


