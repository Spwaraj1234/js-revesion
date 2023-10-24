const buttoen = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttoen.forEach(function (butt) {
    butt.addEventListener("click",function(b) {
            console.log(b.target)

            if (b.target.id=="grey") {
                 body.style.backgroundColor = b.target.id;
            }
            if (b.target.id =="white") {
                body.style.backgroundColor= b.target.id;
            }
            if(b.target.id=="blue"){
                body.style.backgroundColor = b.target.id
            }
    })
})