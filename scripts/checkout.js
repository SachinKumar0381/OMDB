// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let arr=localStorage.getItem("amount");
document.querySelector("#wallet").textContent=arr || 0;
document.querySelector("#confirm").addEventListener("click",total);
function total(){
    let seat=document.querySelector("#number_of_seats").value;
    let amnt=100*Number(seat);
    if(amnt>Number(arr))
    {
        alert("Insufficient Balance!");
    }
    else{
        alert("Booking successful!");
        arr=Number(arr)-amnt;
        localStorage.setItem("amount",arr);
        arr=localStorage.getItem("amount");
        document.querySelector("#wallet").textContent=null;
        document.querySelector("#wallet").textContent=arr
    }
}
let film=JSON.parse(localStorage.getItem("movie"));
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src=film.Poster;
    let p=document.createElement("p");
    p.textContent=film.Title;
    div.append(image,p);
    document.querySelector("#movie").append(div);