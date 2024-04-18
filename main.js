
var canvas=new fabric.Canvas('myCanvas');
blockimagewidth=30;
blockimageheight=30;
playerX=10;
playerY=10;

var playerObject="";
var blockimageObject="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject=Img;
         playerObject.scaleToWidth(150);
         playerObject.scaleToHeight(140);
         playerObject.set({
            top:playerY,
            left:playerX
         })
         canvas.add(playerObject);
    }
    )
}
function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockimageObject=Img;
        blockimageObject.scaleToWidth(blockimagewidth);
        blockimageObject.scaleToHeight(blockimageheight);
        blockimageObject.set({
            top:playerY,
            left:playerX
        }
        )
        canvas.add(blockimageObject);
    })
}
window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=='80'){
        console.log("p eshift pressionados juntos");
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
    }
    if(e.shiftKey==true&&keyPressed=='77'){
        console.log("m eshift pressionados juntos");
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
    }
    if(keyPressed=='38'){
       up();
       console.log("up")
    }
    if(keyPressed=='40'){
        down();
        console.log("down")
     }
     if(keyPressed=='37'){
        left();
        console.log("left")
     }
     if(keyPressed=='39'){
        right();
        console.log("right")
     }
     if(keyPressed=='87'){
        newImage('wall.jpg');
        console.log("w")
     }
     if(keyPressed=='71'){
        newImage('ground.png');
        console.log("g")
     }
     if(keyPressed=='76'){
        newImage('light_green.png');
        console.log("l")
     }
     if(keyPressed=='84'){
        newImage('trunk.jpg');
        console.log("t")
     }
     if(keyPressed=='82'){
        newImage('roof.jpg');
        console.log("r")
     }
     if(keyPressed=='89'){
        newImage('yellow_wall.png');
        console.log("y")
     }
     if(keyPressed=='68'){
        newImage('dark_green.png');
        console.log("d")
     }
     if(keyPressed=='85'){
        newImage('unique.png');
        console.log("u")
     }
     if(keyPressed=='67'){
        newImage('cloud.jpg');
        console.log("c")
     }

}
function up(){
   if(playerY>=0){
      playerY=playerY-blockimageheight;
      console.log("altura da imagem do bloco="+blockimageheight);
      console.log("Quando a tecla direcional para cima for pressionada,X="+playerX+",Y="+playerY);
      canvas.remove(playerObject);
      playerUpdate();
   }
}
function down(){
   if(playerY<=500){
      playerY=playerY+blockimageheight;
      console.log("altura da imagem do bloco="-blockimageheight);
      console.log("Quando a tecla direcional para baixo for pressionada,X="+playerX+",Y="+playerY);
      canvas.remove(playerObject);
      playerUpdate();
   }
}
function left(){
   if(playerX>0){
      playerX=playerX-blockimagewidth;
      console.log("largura da imagem do bloco="-blockimagewidth);
      console.log("Quando a tecla direcional para esquerda for pressionada,X="+playerX+",Y="+playerY);
      canvas.remove(playerObject);
      playerUpdate();
   }
}
function right(){
   if(playerX<=850){
      playerX=playerX+blockimagewidth;
      console.log("largura da imagem do bloco="+blockimagewidth);
      console.log("Quando a tecla direcional para direita for pressionada,X="+playerX+",Y="+playerY);
      canvas.remove(playerObject);
      playerUpdate();
   }
}