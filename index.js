const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"
,"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1"
, "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]"
,",","|",":",";","<",">",".","?","/"];

function generatePasswords() {
  let passwordOneArray = []
  let passwordTwoArray = []
  for (i = 0; i < 9; i++) {
    let characterA = characters[Math.floor(Math.random() * characters.length)]
    let characterB = characters[Math.floor(Math.random() * characters.length)]
    passwordOneArray.push(characterA)
    passwordTwoArray.push(characterB)
    console.log(passwordOneArray)
  }
  let passOne = document.getElementById("pass-one")
  let passTwo = document.getElementById("pass-two")
  passOne.textContent = passwordOneArray.join("")
  passTwo.textContent = passwordTwoArray.join("")
}
