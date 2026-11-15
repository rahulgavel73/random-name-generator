const arr = ["Rahul","Sameer","Subham","Aryan","Ichigo","JOJO","Luffy","Narto","Goku","Vegeta"];
let names = document.querySelector("#container");
let btn1 = document.querySelector("#addbtn");
let btn2 = document.querySelector("#reset");
let randomPlace = ()=>{
    let y = Math.floor(Math.random()*90);
    let x = Math.floor(Math.random()*80);
    return [x, y];
};
btn1.addEventListener("click",()=>{
    let [x, y] = randomPlace();
    let random = Math.floor(Math.random()*arr.length);
    let h = document.createElement("div");
    h.classList.add("name");
    h.textContent = arr[random];
    h.style.top = `${y}%`;
    h.style.left = `${x}%`;
    names.appendChild(h);
});
btn2.addEventListener("click",()=>{
    names.textContent = "";
});
