function randomBettwen(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
//   0 - pedra
//   1 - papel
//   2 - tesoura

function sortmachine(){
    machineResult = randomBettwen(0,2)
    if (machineResult==0){
      return("pedra")
    }
    else if (machineResult==1){
      return("papel")
    }
    else if (machineResult=2){
      return("tesoura")
    }
}

let rockButton = document.getElementById("rock")
let papperButton = document.getElementById("papper")
let scissorsButton = document.getElementById("scissors")

let div = document.getElementById("output")


// div.innerText()  
function resultGame(whereClick, machineValue){
  if(whereClick=="pedra" && machineValue=="tesoura"){
    div.innerText = "Machine: " + machineValue + " x " + "Você: " + whereClick  + "  Voce Ganhou!"
  }
  else if(whereClick=="papel" && machineValue=="pedra"){
    div.innerText = "Machine: " + machineValue + " x " + "Você: " + whereClick  + "  Voce Ganhou!"

  }
  else if(whereClick=="tesoura" && machineValue=="papel"){
    div.innerText = "Machine: " + machineValue + " x " + "Você: " + whereClick  + "  Voce Ganhou!"
  }

  else if(whereClick=="tesoura" && machineValue=="tesoura"){
    div.innerText = "Machine: " + machineValue + " x " + "Você: " + whereClick  + "  Empate!"
  }
  else if(whereClick=="papel" && machineValue=="papel"){
    div.innerText = "Machine: " + machineValue + " x " + "Você: " + whereClick  + "  Empate!"
  }
  else if(whereClick=="pedra" && machineValue=="pedra"){
    div.innerText = "Machine: " + machineValue + " x " + "Você: " + whereClick  + "  Empate!"
  }
  else{
    div.innerText = "Machine: " + machineValue + " x " + "Você: " + whereClick   + "  Voce Perdeu!"

  }
}
rockButton.addEventListener('click', function(){resultGame("pedra", sortmachine())})
papperButton.addEventListener('click', function(){resultGame("papel", sortmachine())})
scissorsButton.addEventListener('click', function(){resultGame("tesoura", sortmachine())})

