// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// https://www.omdbapi.com/?t=thor&apikey=28ff2eef
let arr=localStorage.getItem("amount");
let id;
document.querySelector("#wallet").textContent=arr || 0;

let moviediv=document.querySelector("#movies");
async function searching(){
    try{
        let mname=document.querySelector("#search").value;
        let res =await fetch(`https://www.omdbapi.com/?t=${mname}&apikey=28ff2eef`);
        let data=await res.json();
        appenddata(data);
    }
    catch(err){
        console.log(err);
    }
}

function appenddata(el){
    moviediv.innerHTML=null;
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=el.Poster;
        let p=document.createElement("p");
        p.textContent=el.Title;
        let but=document.createElement("button");
        but.innerText="Book Now";
        but.addEventListener("click",function(){
            gocheck(el)
        });
        div.append(image,p,but);
        moviediv.append(div);
}
function gocheck(el){
    window.location.href="checkout.html";
    localStorage.setItem("movie",JSON.stringify(el));
}
async function main(){
    let data =await searching();
    if(data==undefined)
    {
        return false;
    }
    else
    {
        appenddata(data);
    }
}
function debounce(func,delay)
{
    if(id)
    {
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay);
}
