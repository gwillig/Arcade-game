// General funtions



class Enemy{
  constructor(y){
    this.x = 0;
    this.y = y;
    this.speed = 5;
    this.sprite = 'images/enemy-bug.png';
    }

  update(dt,pause){
      this.x+=(this.speed*dt)
      if (this.x>=400){
        this.x = 0
      }
      // The following condition check if player is killed.
      if((this.y==player.y)&&(
                              ((this.x-25)<player.x)&&
                              (player.x<(this.x+77))
                            )){
        score = 0;
        gameLevel = 0 ;
        allEnemies = [new Enemy(230)];
        player =new Player(400,430,50);

        return
      }
    }

  render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
  }


function drawText(text) {
  /* @decription: Creates the game title
     @param: text (string)
     @returns: Nothing
   */
  ctx.font ='35pt Arial';
  ctx.fillText(text, 0,35);
}

function displayScoreLevel () {
  /* @decription:
     @param: Score (string)
     @param: gameLevel (string)
     @returns: Nothing
   */
   score += 1
   if (score%5==0){
     // IF level up then increase the speed and add new enempy
     gameLevel+=1;
     allEnemies.push(new Enemy(230-200*Math.random()));
     allEnemies.forEach(function(enemy){
       enemy.speed+=(Math.random()*5)

     })
     score += 1;
   }
   document.querySelector("#score").textContent = `Score: ${score}; Level: ${gameLevel}`
   player.y = 430;
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
  update(){};
  render(){
    ctx.drawImage(Resources.get(this.skin[this.currentSkin]), this.x, this.y);
  }
  change_skin(x) {
    this.currentSkin = parseInt(x)
  }
  handleInput(keyPress) {

          switch (keyPress) {
              case 'left':
                  if(player.x<=0){
                      return
                  }
                  else{
                      player.x -= player.speed;
                      break;
                  }

              case 'right':
                  if (player.x>=400){
                      return
                  }
                  else {
                     player.x += player.speed
                     break;
                  }


              case 'up':
                  if ((player.y - player.speed)<=-20){
                      displayScoreLevel()
                      return
                  }
                  else {
                     player.y -= player.speed
                     break;
                        }
              case 'down':
                  if ((player.y + 50)>430){
                      return
                  }
                  else {
                     player.y += player.speed
                     break;
                  }
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

let text = "Classic acarade game";
let [score, gameLevel] = [0,0]
let pause = false;

let allEnemies = [new Enemy(230)];
let player =new Player(400,430,50);


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
