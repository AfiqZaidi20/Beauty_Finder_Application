function buttonClicked(){  
    
    var brand = document.getElementById("brand").value

    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => response.json())
    .then((data) => {
        
        console.log(data)  

    } )  
}