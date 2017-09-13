demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#990033';
        console.log('state3');
        addChangeStateEventListeners();
    },
    update: function(){}
};