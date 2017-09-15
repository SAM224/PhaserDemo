var demo = {};
var centerX = 1500/2, centerY = 1000/2;
var pikachu, speed = 4;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('pikachu',
        'assets/spritesheets/pikachuSheet.png', 320, 320);
        game.load.image('tree', 'assets/backgrounds/treeBG.png')
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#880088';
        console.log('state0');
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2813, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var bg = game.add.sprite(0,0,'tree');


        pikachu = game.add.sprite(centerX,centerY,'pikachu');
        pikachu.anchor.setTo(0.5,0.5);
        pikachu.scale.setTo(-0.7,0.7);
        game.physics.enable(pikachu);
        pikachu.body.collideWorldBounds = true;
        pikachu.animations.add('walk', [0, 1]);
        game.camera.follow(pikachu);
        game.camera.deadzone = new Phaser.Rectangle(centerX-300,0,600,1000);

    },
    update: function(){
        // Horizontal Movement
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            pikachu.scale.setTo(-0.7,0.7);
            pikachu.x += speed;
            pikachu.animations.play('walk',5,true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            pikachu.scale.setTo(0.7,0.7);
            pikachu.x -= speed;
            pikachu.animations.play('walk',5,true);
        }
        else{
            pikachu.animations.stop('walk');
            pikachu.frame = 0;
        }
        // Vertical Movement
        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            pikachu.y += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            pikachu.y -= speed;
            if(pikachu.y < 395){
                pikachu.y = 395;
            }
        }
    }
};

function changeState(i,stateNum){
    game.state.start('state'+ stateNum);
}


function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn,null, null,args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO,changeState,0);
    addKeyCallback(Phaser.Keyboard.ONE,changeState,1);
    addKeyCallback(Phaser.Keyboard.TWO,changeState,2);
    addKeyCallback(Phaser.Keyboard.THREE,changeState,3);
    addKeyCallback(Phaser.Keyboard.FOUR,changeState,4);
    addKeyCallback(Phaser.Keyboard.FIVE,changeState,5);
    addKeyCallback(Phaser.Keyboard.SIX,changeState,6);
    addKeyCallback(Phaser.Keyboard.SEVEN,changeState,7);
    addKeyCallback(Phaser.Keyboard.EIGHT,changeState,8);
    addKeyCallback(Phaser.Keyboard.NINE,changeState,9);
}