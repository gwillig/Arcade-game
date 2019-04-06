// Define variable
var text = "Classic acarade game";
let [score, gameLevel] = [10,5]

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


function drawText(text) {
  /* @decription: Creates the game title
     @param: text (string)
     @returns: Nothing
   */
  ctx.font ='35pt Arial';
  ctx.fillText(text, 0,35);
}

function displayScoreLevel (score, gameLevel) {
  /* @decription:
     @param: Score (string)
     @param: gameLevel (string)
     @returns: Nothing
   */
   // let newDiv = document.createElement("div");
   // let newSpan = document.createElement("p");
   // newSpan.setAttribute("id","score")
   // newSpan.textContent = `Score: ${score}; Level: ${gameLevel}`
   // newSpan.style.fontSize="1.5em"
   // newSpan.style.align = "center"
   // newDiv.appendChild(newSpan)
   // document.body.appendChild(newDiv)


}


class Player{
  constructor(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.name="Gustav";
    this.currentSkin = 1;
    this.skin = [
                'images/char-boy.png',
                'images/char-boy.png',
                'images/char-cat-girl.png',
                'images/char-horn-girl.png',
                'images/char-pink-girl.png',
                'images/char-princess-girl.png',
                ]
  }
  update(){console.log("da")};
  // render(){
  //   let player_imag = new Image();
  //   player_imag.src = this.skin[1]
  //   player_imag.onload = function(){
  //     ctx.drawImage(player_imag,this.x, this.y)
  //   }
  //
  // }
  render(){
    ctx.drawImage(Resources.get(this.skin[this.currentSkin]), this.x, this.y);
  }
  change_skin(x) {
    this.currentSkin = parseInt(x)
  }
  handleInput(keyPress, pause) {
          switch (keyPress) {
              case 'left':
                  player.x -= player.speed
                  break;
              case 'right':
                  player.x += player.speed
                  break;
              case 'up':
                  player.y -= player.speed
                  break;
              case 'down':
                  player.y += player.speed
                  break;
              case '1':
              case '2':
              case '3':
              case '4':
              case '5':
                  player.change_skin(keyPress);
                  break;
              default:
                  break;

      };}

}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = []
let player =new Player(0,0,50)

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        49: '1',
        50: "2",
        51: "3",
        52: "4",
        53: "5",
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
