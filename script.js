console.log("Script started");

function changeStyle() {
    console.log("click");

    let p = document.getElementById("text");
    p.innerText = "The text has been changed";

    p.style.color = "black";
    p.style.fontSize = "40px";
    p.style.border = "4px solid black";
    p.style.backgroundColor = "darkred";
}

function resetStyle() {
    console.log("click");
    let p = document.getElementById("text");
    
    p.style.color = "";
    p.style.fontSize = "";
    p.style.border = "";
    p.style.backgroundColor = "";

}
