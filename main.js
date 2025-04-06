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

    var boss = document.getElementById('boss')


    boss.onmouseenter = function () {
        boss.querySelector('img').src = "./BossGif.gif"

    }
    boss.onmouseleave = function () {
        boss.querySelector('img').src = "./assets/BossHuntlogo.png"

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
        scooby.querySelector('img').src = "./assets/Png.png"

    }

    var rescue = document.getElementById('rescue')


    rescue.onmouseenter = function () {
        rescue.querySelector('img').src = "./assets/rescueGif.gif"

    }
    rescue.onmouseleave = function () {
        rescue.querySelector('img').src = "./assets/geometric.png"

    }
    var uncanny = document.getElementById('uncanny')


    uncanny.onmouseenter = function () {
        uncanny.querySelector('img').src = "https://content.imageresizer.com/images/memes/mr-incredible-becoming-uncanny-phase-3-remake-meme-10.jpg"

    }
    uncanny.onmouseleave = function () {
        uncanny.querySelector('img').src = "./assets/uncanny.png"

    }
}
