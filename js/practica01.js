//variables
const documento = document.querySelector('.technical-sheet');
const buttonSheet = document.getElementsByClassName('card-link');

const cardDiv = document.querySelector('.card-div');


//eventos


cardDiv.addEventListener('click', (e)=>{
    if(e.target.classList.contains('card-link')){
        console.log('click en la ficha técnica');
    }
})

window.addEventListener('scroll', () =>{
    const nav = document.querySelector('.navbar');
    const ubicacion = nav.getBoundingClientRect();

    if(ubicacion.top > -200){
        
    } else{
        console.log('no es visible');
    }
});