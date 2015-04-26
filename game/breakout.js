// Constant definitions
var INIT_WIDTH = 800;
var INIT_HEIGHT = 600;

// Boot time state
boot.prototype = {
	preload: function(){
        this.game.load.image("loading","assets/loading.png"); 
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
};

// Preload assets
preloader.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(400,300,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.image("logo","assets/logo.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("gameover","assets/gameover.png");
        this.game.load.image("paddle","assets/paddle.png");
        this.game.load.image("ball","assets/ball.png");
        this.game.load.image("brick0","assets/brick0.png");
        this.game.load.image("brick1","assets/brick1.png");
        this.game.load.image("brick2","assets/brick2.png");
        this.game.load.image("brick3","assets/brick3.png");
        this.game.load.image("brick4","assets/brick4.png");
	},
  	create: function(){
		this.game.state.start("MainMenu");
	}
};

// Initialization code
(function() {
    var game = new Phaser.Game(INIT_WIDTH, INIT_HEIGHT, Phaser.AUTO, "game");
    game.state.add("Boot", boot);
    game.state.add("Preload", preloader);
    game.state.add("MainMenu", mainMenu);
    game.state.add("Play", play);
    game.state.add("NextLevel", nextLevel);
    game.state.add("GameOver", gameOver);
    game.state.start("Boot");
})();