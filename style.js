c=0;
function dark_mode(){
    var ele = document.getElementsByClassName("secRight");
    if(c%2==0){
        ele.toggle(".dark");
    }
    c++;
}

console.log("Ashish");