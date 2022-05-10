// Select color input
var colorpik = document.querySelector("#colorPicker");
// When size is submitted by the user, call makeGrid()
var table = document.querySelector("#pixelCanvas");
// Select size input
var sizepik = document.querySelector("#sizePicker"); 
sizepik.addEventListener("submit",function(){
    event.preventDefault();
    var  width = document.querySelector("#inputHeight").value;
    var height = document.querySelector("#inputWidth").value;
    makeGrid(height, width);
});

function makeGrid(width, height) {
    // Your code goes here!
    table.innerHTML = "";
    
    for(var row = 1; row <= height; row++){
        var elem = document.createElement("tr")
        var id = "row" + row;
        elem.setAttribute("id", id);
        table.append(elem);
        for( var col = 1; col<= width; col++){
            var level = document.querySelector("#row"+row);
            var td = document.createElement("td")
            elem.append(td);
        };
        
    };
    document.querySelectorAll('#pixelCanvas td')
        .forEach(e => e.addEventListener("click", function() {
            var color = colorpik.value;
            if(this.hasAttribute("style")){
                this.removeAttribute("style");
            }else{
                this.setAttribute("style", "background-color: " + color );
            }
            console.log(this);
        }));
    

}


