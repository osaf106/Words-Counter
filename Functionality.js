
let textarea = document.getElementById("textarea");

textarea.addEventListener("input",function(){
    let getvalue=this.value;
    getvalue=getvalue.trim();
    let char = getvalue.length;
    document.getElementById("char").innerHTML = char; 

    // words 
    let word = getvalue.split(" ");
    var clear = word.filter(function (elm){
        return elm!="";
    })
    document.getElementById("word").innerHTML =clear.length;

})