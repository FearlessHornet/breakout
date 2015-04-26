mainMenu.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(400,100,"logo");
		gameTitle.anchor.setTo(0.5,0);
		var playButton = this.game.add.button(400,400,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("Play");
	}
};