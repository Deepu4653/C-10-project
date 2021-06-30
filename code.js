var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0973a552-4ea7-4675-b758-ae435b03e257","29b24290-1c28-42d6-ae6b-d5575c26e152"],"propsByKey":{"0973a552-4ea7-4675-b758-ae435b03e257":{"name":"ball","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"K4XYaDuEdZLHC3Vu2BJQnopQOPcOU4YJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/0973a552-4ea7-4675-b758-ae435b03e257.png"},"29b24290-1c28-42d6-ae6b-d5575c26e152":{"name":"B","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"qt3YTCPa0ZWX3MXxdWGZ1TRUpFJwui0O","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/29b24290-1c28-42d6-ae6b-d5575c26e152.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var line1 = createSprite(193,13,430,5);
line1.shapeColor = "white";

var line2 = createSprite(13,200,5,430);
line2.shapeColor = "white";

var line3 = createSprite(198,388,430,5);
line3.shapeColor = "white";

var line4 = createSprite(387,200,5,430);
line4.shapeColor = "white"; 

var line5 = createSprite(196,146,430,5);
line5.shapeColor = "white";

var line6 = createSprite(198,252,430,5);
line6.shapeColor = "white";

var striker = createSprite(200, 200, 10, 10);
striker.shapeColor = "yellow";

var playerMallet = createSprite(200, 50, 50, 10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200, 350, 50, 10);
computerMallet.shapeColor = "black";

var goal1 = createSprite(200, 28, 100, 20);
goal1.shapeColor = "yellow";

var goal2 = createSprite(200, 372, 100, 20);
goal2.shapeColor = "yellow";

var gameState = "serve";
var compscore = 0;
var playerscore = 0;









function draw() {
  background("green");
  createEdgeSprites();
  
   if(gameState === "serve"){
    textSize(15);
    fill("blue");
    text("PRESS SPACE TO SERVE", 130,180);
  }
  fill("yellow");
  textSize(15);
  text(compscore,18,219);
  
  fill("yellow");
   textSize(15);
  text(playerscore,18,190);

  
  createEdgeSprites();
  playerMallet.bounceOff(line2);
  playerMallet.bounceOff(line4);
  striker.bounceOff(line1);
  striker.bounceOff(line2);
  striker.bounceOff(line3);
  striker.bounceOff(line4);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  computerMallet.bounceOff(line2);
  computerMallet.bounceOff(line4);
  
  if (keyDown("RIGHT_ARROW")) {
    playerMallet.x = playerMallet.x+10;
    
  }
  if(keyDown("LEFT_ARROW")){
    playerMallet.x = playerMallet.x-10;
  }
    if(keyDown("space") && gameState=== "serve"){
     serve();
     gameState = "play";
    }
    
    computerMallet.x = striker.x;
    
  
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
    
  }
  
  if (striker.isTouching(goal1) || striker.isTouching(goal2)) {
  if(striker.isTouching(goal1)){
      compscore = compscore+1;
    }
    if(striker.isTouching(goal2)){
      playerscore = playerscore+1;
    }
    
    reset();
    gameState = "serve";
  }
  
  if(compscore === 5 || playerscore === 5){
    gameState = "over";
    text("Game Over!!", 165, 160);
    text("Press R to Restart", 150, 180);
  }
  if (keyDown("r") && gameState === "over") {
    compscore = 0;
    playerscore = 0;
    gameState = "serve"; 
  }
  drawSprites();
  
}

function serve() {
  striker.velocityX = 6;
  striker.velocityY = -7;
}

function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
