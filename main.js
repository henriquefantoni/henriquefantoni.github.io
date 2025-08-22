const names = ["GRAPPLES","BOSS HUNT","QUESTIONS"]
const descs = ["FIGHTING GAME","BOSS BATTLE GAME","HORROR GAME"]
const gifs = ["./gifGRAPLLES.gif","./BossGif.gif","./questionsGif.gif"]

var index=0



setInterval(()=> {
    document.getElementById("gameName").innerHTML = names[index]
    document.getElementById("gameDesc").innerHTML = descs[index]
    document.getElementById("heroImage").style.backgroundImage =
    `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${gifs[index]})`

    if(index<2) {
        index++
        
    }else {
        index = 0
    }
},5000)

window.onload = function ()  {

    document.getElementById("gameName").innerHTML = names[index]
        document.getElementById("gameDesc").innerHTML = descs[index]
        document.getElementById("heroImage").style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${gifs[index]})`
    
        if(index<2) {
            index++
            
        }else {
            index = 0
        }
    var Questions = document.getElementById('questions')


    Questions.onmouseenter = function () {
        Questions.querySelector('img').src = "./questionsGif.gif"

    }
    Questions.onmouseleave = function () {
        Questions.querySelector('img').src = "./assets/questions.png"

    }

    var grapples = document.getElementById('grapples')


    grapples.onmouseenter = function () {
        grapples.querySelector('img').src = "./gifGRAPLLES.gif"

    }
    grapples.onmouseleave = function () {
        grapples.querySelector('img').src = "./assets/logo grapples.png"

    }


    var terry = document.getElementById('terry')


    terry.onmouseenter = function () {
        terry.querySelector('img').src = "./assets/bossGif.gif"

    }
    terry.onmouseleave = function () {
        terry.querySelector('img').src = "./assets/terry.png"

    }


   var scooby = document.getElementById('scooby')


    scooby.onmouseenter = function () {
        scooby.querySelector('img').src = "./assets/scoobyGif.gif"

    }
    scooby.onmouseleave = function () {
        scooby.querySelector('img').src = "./assets/superman logo.png"

    }

    var obby = document.getElementById('obby')


    obby.onmouseenter = function () {
        obby.querySelector('img').src = "./assets/help.gif"

    }
    obby.onmouseleave = function () {
        obby.querySelector('img').src = "./assets/obby.jpg"

    }
}
