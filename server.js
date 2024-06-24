let elements=[
    document.getElementById('flower'),
    document.getElementById('forest'),
    document.getElementById('sky'),
    document.getElementById('earth'),
    document.getElementById('moon'),
    document.getElementById('lake')
];
let input = document.getElementById('input');

function search(){
let value = input.value.toLowerCase();
elements.forEach(element => {
    if(element.id === value){
        element.style.display ="block"
    }
    else{
        element.style.display ="none"
    }
})
}