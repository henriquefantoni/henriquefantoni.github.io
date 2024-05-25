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