// Store the wallet amount to your local storage with key "amount"
document.querySelector("#add_to_wallet").addEventListener("click",addmoney);
let arr=localStorage.getItem("amount");
let scramount=document.querySelector("#wallet");
scramount.textContent=arr || 0;

function addmoney(){
    let money=document.querySelector("#amount").value;
    let sum=Number(money)+Number(scramount.textContent)
    localStorage.setItem("amount",sum);
    scramount.textContent=sum;
    document.querySelector("#amount").value=null;
}
document.querySelector("#book_movies").addEventListener("click",gotomovie);
function gotomovie(){
    window.location.href="movies.html";
}