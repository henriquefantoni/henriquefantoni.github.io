const names = ["GRAPPLES","BOSS HUNT","QUESTIONS"]
const descs = ["A adventure game","A BOSS BATTLE GAME","A HORROR GAME"]
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

    var Questions = document.getElementById('questions')


    Questions.onmouseenter = function () {
        Questions.querySelector('img').src = "./questionsGif.gif"

    }
    Questions.onmouseleave = function () {
        Questions.querySelector('img').src = "./assets/questions.png"

    }

    var grapples = document.getElementById('grapples')


    grapples.onmouseenter = function () {
        grapples.querySelector('img').src = "./gifGraplles.gif"

    }
    grapples.onmouseleave = function () {
        grapples.querySelector('img').src = "./assets/logo grapples.png"

    }

    var boss = document.getElementById('boss')


    boss.onmouseenter = function () {
        boss.querySelector('img').src = "./BossGif.gif"

    }
    boss.onmouseleave = function () {
        boss.querySelector('img').src = "./assets/BossHuntlogo.png"

    }
}
