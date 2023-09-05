

  
function generate(){
location2 = document.getElementById("input_location").value;
place = location2.toLowerCase();
pre_prompt = document.getElementById("input_prompt").value;
prompt = pre_prompt.toLowerCase();
console.log("Description of Building:"+ prompt);
if(prompt == "a ten story building" && place == "dubai"){
    window.location = "index2.html";
}
const apiKey = "09810e4d534e809b253c0e449a6d6281";
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
fetch(`${apiEndpoint}?appid=${apiKey}&q=${encodeURIComponent('dubai')}&units=metric`)
  .then(response => response.json())
  .then(data => {
    console.log(`The temperature in ${data.name} is ${data.main.temp}°C`);
  })
  .catch(error => console.error(error))   
}
                                                                                                                                                                                                                                                                                                   

function oneimage(){
    window.location = "index3.html";  
}
function twoimage(){
    window.location = "index3.html";    
}
function threeimage(){
    window.location = "index3.html";   
}
function fourimage(){
    window.location = "index3.html";   
}

