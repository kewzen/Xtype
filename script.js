var words = ["что","почему","как","зачем","где","она","сказала","сказал","потому","это","этот","даже","вот","что","почему","как","зачем","где","она","сказала","сказал","потому","это","этот","даже","вот"]
var words1 = document.getElementById("words")
var inp = document.getElementById("inp") 
let number = 0;
let number2 = 0;
let con = 0;
let counter = 0;
let s = 0;
let mi = 0;
let time;
let presec = 0;
let pres;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    number = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    number2 = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const choicecar = () => {
    
    var menu = document.getElementById("cars")

    if (menu.style.display =  "none"){
    menu.style.display = "block"
    }
    
  }
  const closee  = () =>{
    var menu = document.getElementById("cars")
    var but = document.getElementById("close")
    if (menu.style.display = "block"){
      menu.style.display = "none"
    }
  }

const dino = () =>{
  var car =document.getElementById("car")
  car.src = "cars/dino.gif"
}
  const fmoto = () =>{
    var car =document.getElementById("car")
    car.src = "cars/futuremoto.png"
  }
  const trolley = () =>{
    var car =document.getElementById("car")
    car.src = "cars/trolley.png"
  }

  const ship = () =>{
    var car =document.getElementById("car")
    car.src = "cars/ship.png"
  }

  const moto = () =>{
    var car =document.getElementById("car")
    car.src = "cars/moto.png"
  }
    

  const lambo = () =>{
    var car =document.getElementById("car")
    car.src = "cars/lambo.png"
  }
  const tesla = () =>{
    var car =document.getElementById("car")
    car.src = "cars/tesla.png"
  }
  const ferrari = () =>{
    var car =document.getElementById("car")
    car.src = "cars/Ferrari.png"
  }

  const boxer = () =>{
    var car =document.getElementById("car")
    car.src = "cars/boxer.png"
  }

  const timer = () =>{
    s = s + 1 
    if (s == 60){
      mi++
      s = 0
    }
    let clock = document.getElementById("time")
    clock.textContent = mi + ":" + s
    
  }
  const stopint = v =>
{
  pres = setInterval(prestarttime,1000)

}



 

const start = () =>{

  presec = 0

  
  var inp = document.getElementById("inp") 
  clearInterval(time)
  s = 0
  mi = 0
 
  time = setInterval(timer,1000)
  
  counter = 0;
 
   
    var words1 = document.getElementById("words")
    var car  = document.getElementById("car")
  car.style.left = '500px'
    inp.value = ''
    getRandomInt(0,5)
    getRandomInt2(0,5)
    words.sort(()=>Math.random()-0.5)

    words1.textContent =  words.join(" ")
    
    inp.focus()
    
}
const prestarttime = () =>{
   
  presec = presec + 1
  var elem2 = document.getElementById("words")
  elem2.style.display = "none"
  var elem = document.getElementById("pretime")
  elem.textContent = presec
  
  if (presec == 3){
   clearInterval(pres)

   elem2.style.display = "block"
    elem.textContent = ''
    start()
  
}
}


const end = () =>{
  
  var car  = document.getElementById("car")
  car.style.left = '500px'
  clearInterval(time)
  s = 0
  mi = 0
  let clock = document.getElementById("time")
  clock.textContent = ""
  var inp = document.getElementById("inp") 
  inp.value = ''
  var words1 = document.getElementById("words")
  words1.textContent = ""
  counter = 0
}

const ch = e =>{
  var car = document.getElementById("car")
    if (e.value == words[counter]  + " " || e.value == 'т')
    {
      
        e.value = ''
        counter++
      
    } 

    
    if (counter == words.length){
      end()
    }
    car.style.left = 500 + counter*25  + "px"

    

  
}

document.addEventListener('keyup', function(event){
  if (event.keyCode == 16){
      stopint()
      
  }
})

const themes = () =>{
  var theme = document.getElementById("them")
  var icoon = document.getElementById("itheme")
  if (theme.getAttribute("href") == "css/dark.css" ){
    theme.href = 'css/light.css'
    icoon.src = "Sun.png"
  }

   else {
    theme.href = "css/dark.css"
    icoon.src = "moon.png"

   }
}

const mthemes = () =>{
  var menu = document.getElementById("mtheme")
  if (menu.style.display == "block"){
    menu.style.display = "none"
  }
  else{
    menu.style.display = "block"
  }
}



const tgt = () =>{
  var theme = document.getElementById("them")
  theme.href = "css/tgtheme.css"
}

const gmmk = () =>{
  var theme = document.getElementById("them")
  theme.href = 'css/red.css'
}


const omodes = () =>{
  var menu = document.getElementById("modesmenu")
  if (menu.style.display == "block"){
    menu.style.display = "none"
  }

  else{
    menu.style.display = "block"
  }
}


const sot = () =>{
  words  = ["что","почему","как","зачем","где","она","сказала","сказал","потому","это","этот","даже","вот","что","почему","как","зачем","где","она","сказала","сказал","потому","это","этот","даже","вот"]
}

const cifr = () =>{
  words = [1,0,9,98,97,32,54,71,3,16,12,90,77,39,90,6,19,92,61,50,54,23,11,61,48,99,33,82,20,11,10,15,39,93,72,90,45,37,71,70]
}