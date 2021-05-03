function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var backgroundImage = new Image();
    var naveImage   = new Image(); // nave
    var enemiespic1  = new Image(); // enemigo 1
    var enemiespic2 = new Image(); // enemigo 2

    // backgroundImage y naveImage
  // backgroundImage.src = "images/background-pic.jpg"; //Background picture
    naveImage.src       = "images/spaceship-pic.png"; //Spaceship picture
    // Enemigos fotos
    enemiespic1.src     = "images/enemigo1.png";
    enemiespic2.src     = "images/enemigo2.png"; //Enemies picture
    
    // width and height (canvas)
    var cW = ctx.canvas.width; // 700px 
    var cH = ctx.canvas.height;// 600px

    // template for naves
    var enemyTemplate = function(options){
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemiespic1
        }
    }

    function aleatorio(min,maxi){
        var resultado;
        resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
        return resultado;
    }

    // To reduce a repetitive function or two I've made some slight changes to how you create enemies.
    var enemies = [
                   new enemyTemplate({id: "enemy1", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30}),
                   new enemyTemplate({id: "enemy2", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy3", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy4", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy5", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy6", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy7", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy8", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy9", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy10", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy11", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy12", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy13", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy14", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy15", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy16", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy17", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy18", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy19", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy20", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy21", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy22", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy23", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy24", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy25", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy26", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy27", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy28", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy29", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy30", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy31", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),
                   new enemyTemplate({id: "enemy32", x:  aleatorio(0,350), y: aleatorio(-20,-2500), w: 50, h: 30 }),

                   // Segundo grupo de enemigos
                   new enemyTemplate({ id: "enemy33", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy34", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy35", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy36", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy37", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy38", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy39", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy40", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy41", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy42", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy43", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy44", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy45", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy46", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy47", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy48", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy49", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy50", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy51", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy52", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy53", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy54", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy55", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy56", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy57", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy58", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy59", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy60", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy61", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy62", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy63", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy64", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy65", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy66", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),
                   new enemyTemplate({ id: "enemy67", x: aleatorio(0,350), y:  aleatorio(-20,-2500), w: 50, h: 30, image: enemiespic2 }),

                ];

    // This allows for more enemies to be rendered without needing a function per set of enemies.
    // This also forces enemies to check if THEY are hitting the player 
    var renderEnemies = function (enemyList) {
        for (var i = 0; i < enemyList.length; i++) {
            console.log(enemyList[i]);
            ctx.drawImage(enemyList[i].image, enemyList[i].x, enemyList[i].y += .5, enemyList[i].w, enemyList[i].h);
            // Detects when ships hit lower level
            launcher.hitDetectLowerLevel(enemyList[i]);
        }
    }

    var ExploDir1 ="images/Explo1.png";
    ExploImg1 = new Image();
    ExploImg1.src = ExploDir1;

    var ExploDir ="images/Explo.png";
    ExploImg = new Image();
    ExploImg.src = ExploDir;
    

    function Launcher(){
        // bullet location (ubicación de balas)
        this.y = 500, 
        this.x = cW*.5-25, 
        this.w = 100, 
        this.h = 100,   
        this.direccion, 
        this.bg="white", // bullet color (color de bala)
        this.misiles = [];

         // If you wanted to use different fonts or messages for the player losing you can change it accordingly.
         this.gameStatus = {
            over: false, 
            message: "",
            fillStyle: 'red',
            font: 'italic bold 50px Arial, sans-serif',
        }

        this.render = function () {
            if(this.direccion === 'left'){
                this.x-=3.5;
            } else if(this.direccion === 'right'){
                this.x+=3.5;
            }else if(this.direccion === "downArrow"){
                this.y+=3.5;
            }else if(this.direccion === "upArrow"){
                this.y-=3.5;
            }
            ctx.fillStyle = this.bg;
            ctx.drawImage(backgroundImage, 10, 10); // background image
            ctx.drawImage(naveImage,this.x,this.y, 100, 90); // we need to make sure spaceship is at the same location as the bullets

            for(var i=0; i < this.misiles.length; i++){
                var m = this.misiles[i];
                ctx.fillRect(m.x, m.y-=5, m.w, m.h); // bullet direction
                this.hitDetect(this.misiles[i],i);
                if(m.y <= 0){ // If a missile goes past the canvas boundaries, remove it
                    this.misiles.splice(i,1); // splice that missile out of the misiles array
                }
            }
            // This happens if you win
            if (enemies.length === 0) {
                clearInterval(animateInterval); // Stop the game animation loop
                ctx.fillStyle = 'Blue';
                ctx.font = this.gameStatus.font;
                ctx.fillText('Bravo Ganaste!!!!, ', cW * .5 - 150, 300);
            }
        }

        
        // Detectar impacto de bullet (bala)
        this.hitDetect = function (m, mi) {

            var ExploDir1 ="images/Explo1.png";
            ExploImg1 = new Image();
            ExploImg1.src = ExploDir1;

            var ExploDir ="images/Explo.png";
            ExploImg = new Image();
            ExploImg.src = ExploDir;


            console.log('crush');
            for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                if(m.x+m.w >= e.x && 
                   m.x <= e.x+e.w && 
                   m.y >= e.y && 
                   m.y <= e.y+e.h){

                    
                    this.misiles.splice(this.misiles[mi],1); // Remove the missile
                    enemies.splice(i, 1); // Remove the enemy that the missile hit
                    document.querySelector('.barra').innerHTML = "Destruiste "+ e.id+ " ";
                    
                    ctx.drawImage(ExploImg1, e.x+25, e.y+25);

                    ctx.drawImage(ExploImg, e.x-25, e.y-25);
                    ctx.drawImage(ExploImg1, e.x+50, e.y+50);
                    ctx.drawImage(ExploImg1, e.x, e.y+60);
                    ctx.drawImage(ExploImg1, e.x+50, e.y);

                }
            }
        }
 
 
 
        // Ask player ship if an enemy has passed or has hit the player ship
        this.hitDetectLowerLevel = function(enemy){
            // If location of ship is greater than 550 then we know it passed lower level
            if(enemy.y > 550){
                this.gameStatus.over = true;
    //            this.gameStatus.message = 'Perdiste!!! los dejaste pasar.';

                ctx.fillStyle = 'red';
                ctx.font = this.gameStatus.font;
                ctx.fillText('Perdiste!!, los dejaste pasar, ', 100, 300);

                var ExploDir ="images/Explo.png";
                ExploImg = new Image();
                ExploImg.src = ExploDir;
                ctx.drawImage(ExploImg, this.x, this.y);

            }
            // Esto detecta un choque de la nave con enemigos
            //console.log(this);
            // this.y -> where is spaceship location
            if(enemy.id === 'enemy3'){
                //console.log(this.y);
                console.log(this.x);
            }
            // a) If enemy y is greater than this.y - 25 => then we know there's a collision
            // b) If enemy x is gless than this.x + 45 && enemy x > this.x - 45 then we know theres a collision
            if ((enemy.y < this.y + 25 && enemy.y > this.y - 25) &&
                (enemy.x < this.x + 45 && enemy.x > this.x - 45)) { // Checking if enemy is on the left or right of spaceship
                    this.gameStatus.over = true;
//                    this.gameStatus.message = 'You Died!'

                    ctx.fillStyle = 'red';
                    ctx.font = this.gameStatus.font;
                    ctx.fillText('Perdiste!! algo te golpeó, ', 150, 300);
    

                    var ExploDir ="images/Explo.png";
                    ExploImg = new Image();
                    ExploImg.src = ExploDir;
                    ctx.drawImage(ExploImg, this.x-25, this.y-25);
                }

            if(this.gameStatus.over === true){  
                clearInterval(animateInterval); // Stop the game animation loop
                ctx.fillStyle = this.gameStatus.fillStyle; // set color to text
                ctx.font = this.gameStatus.font;
                // To show text on canvas
                ctx.fillText(this.gameStatus.message, cW * .5 - 80, 50); // text x , y

                var ExploDir ="images/Explo.png";
                ExploImg = new Image();
                ExploImg.src = ExploDir;
                ctx.drawImage(ExploImg, this.x-25, this.y-25);

            }
        }
    }
    
    var launcher = new Launcher();
    function animate(){
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies(enemies);
    }
    var animateInterval = setInterval(animate, 6);
    
    var left_btn  = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var fire_btn  = document.getElementById('fire_btn'); 

   document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) // left arrow
        {
         launcher.direccion = 'left';  
            if(launcher.x < cW*.2-130){
                launcher.x+=0;
                launcher.direccion = '';
            }
       }    
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 37)
        {
         launcher.x+=0;
         launcher.direccion = '';
        }
    }); 

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 39) // right arrow
        {
         launcher.direccion = 'right';
         if(launcher.x > cW-110){
            launcher.x-=0;
            launcher.direccion = '';
         }
        
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 39) // right arrow
        {
         launcher.x-=0;   
         launcher.direccion = '';
        }
    }); 

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 38) // up arrow
         {
           launcher.direccion = 'upArrow';  
           if(launcher.y < cH*.2-80){
              launcher.y += 0;
              launcher.direccion = '';
            }
         }
    });

    document.addEventListener('keyup', function(event){
         if(event.keyCode == 38) // up arrow
         {
           launcher.y -= 0;
           launcher.direccion = '';
         }
    });

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 40) // down arrow
         {
           launcher.direccion = 'downArrow';  
          if(launcher.y > cH - 110){
            launcher.y -= 0;
            launcher.direccion = '';
           }
         }
    });
    document.addEventListener('keyup', function(event){
         if(event.keyCode == 40) // down arrow
         {
           launcher.y += 0;
           launcher.direccion = '';
         }
    });

    document.addEventListener('keydown', function(event){
         if(event.keyCode == 80) // restart game
         {
          location.reload();
         }
    });

    // control buttons
    left_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'left';
    });

    left_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });

    right_btn.addEventListener('mousedown', function(event) {
        launcher.direccion = 'right';
    });

    right_btn.addEventListener('mouseup', function(event) {
        launcher.direccion = '';
    });
    //This code below fires bullets (balas)
    fire_btn.addEventListener('mousedown', function(event) {
        launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3, h: 10});
    });
    // This fires when clicking on space button from keyboard
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 32) {
           launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3,h: 10});
        }
    });
}

window.addEventListener('load', function(event) {
    initCanvas();
});
