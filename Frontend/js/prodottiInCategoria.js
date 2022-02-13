
function prod(nomeCat) {
    
    fetch(`http://localhost:3000/prod?cat=${nomeCat}`).then(

    async result => {

        document.getElementById('mainCateg').style.display = "none";
        
    }
).catch(
    error => {
        console.log(error);
    }
)}