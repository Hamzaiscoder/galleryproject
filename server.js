let flower = document.getElementById('flower');
let earth = document.getElementById('earth');
let forest = document.getElementById('forest');
let lake = document.getElementById('lake');
let moon = document.getElementById('moon');
let sky = document.getElementById('sky');
let input = document.getElementById('input');
function search(){

if(input.value.toLowerCase() == "earth")
{
    earth.style.display= "block";
    flower.style.display="none"
    forest.style.display="none"
    lake.style.display="none"
    moon.style.display= "none";
    sky.style.display= "none";
}

if(input.value.toLowerCase() == "flower")
{
    flower.style.display= "block";
    earth.style.display="none"
    forest.style.display="none"
    lake.style.display="none"
    moon.style.display= "none";
    sky.style.display= "none";

}

if(input.value.toLowerCase() == "forest")
{
    forest.style.display= "block";
    flower.style.display="none"
    earth.style.display="none"
    lake.style.display="none"
    moon.style.display= "none";
    sky.style.display= "none";
}

if(input.value.toLowerCase() == "lake")
{
    lake.style.display= "block";
    flower.style.display="none"
    forest.style.display="none"
    earth.style.display="none"
    moon.style.display= "none";
    sky.style.display= "none";
}
if(input.value.toLowerCase() == "moon")
{
    moon.style.display= "block";
    flower.style.display="none"
    forest.style.display="none"
    earth.style.display="none"
    lake.style.display="none"
    sky.style.display= "none";
    
}
if(input.value.toLowerCase() == "sky")
    {
        sky.style.display= "block";
        moon.style.display= "none";
        flower.style.display="none"
        forest.style.display="none"
        earth.style.display="none"
        lake.style.display="none"
    
        
    }
}