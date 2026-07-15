// Variable 

let accordion = document.getElementsByClassName("content-container");

for (let i = 0; i < accordion.length; i++) {
    accordion(i).addEventlistener("click", function(){
        this.classLst.toggle("active");
    });
};