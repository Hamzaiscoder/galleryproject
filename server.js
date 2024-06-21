let flower = document.getElementById('flower');
let earth = document.getElementById('earth');
let forest = document.getElementById('forest');
let lake = document.getElementById('lake');
let moon = document.getElementById('moon');
let input = document.getElementById('input');
function search(){

if(input.value.toLowerCase() == "earth")
{
    earth.style.display= "block";
    flower.style.display="none"
    forest.style.display="none"
    lake.style.display="none"
    moon.style.display= "none";
}

if(input.value.toLowerCase() == "flower")
{
    flower.style.display= "block";
    earth.style.display="none"
    forest.style.display="none"
    lake.style.display="none"
    moon.style.display= "none";
}

if(input.value.toLowerCase() == "forest")
{
    forest.style.display= "block";
    flower.style.display="none"
    earth.style.display="none"
    lake.style.display="none"
    moon.style.display= "none";
}

if(input.value.toLowerCase() == "lake")
{
    lake.style.display= "block";
    flower.style.display="none"
    forest.style.display="none"
    earth.style.display="none"
    moon.style.display= "none";
    
}
if(input.value.toLowerCase() == "moon")
{
    moon.style.display= "block";
    flower.style.display="none"
    forest.style.display="none"
    earth.style.display="none"
    lake.style.display="none"

    
}
}
// Function to download an image
function downloadImage(imageUrl, imageName) {
    // Create an <a> element
    var a = document.createElement('a');
    a.href = imageUrl; // Set the image URL as href attribute

    // Set the download attribute with the filename
    a.download = imageName;

    // Append the <a> element to the body
    document.body.appendChild(a);

    // Programmatically click the <a> element to trigger download
    a.click();

    // Remove the <a> element from the DOM
    document.body.removeChild(a);
}