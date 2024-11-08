


function getdata(){
    fetch("https://api.github.com/users/HelloAkshayGupta").then((response) => {
        const data =response.json();
        return data;
    }).then((response) => {
        const data = document.getElementById("parent");
        data.innerHTML=response.login;
        
    })
}
