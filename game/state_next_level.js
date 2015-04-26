// This file works as an example to the extensibility of this design

nextLevel.prototype = {
	init: function(score){
		this.score = score;
	},
  	create: function(){
        // For more elegantly displayed static information an image may be considered
  		var gameOverTitle = this.game.add.text(400,200,"YOU WON!",
                        {font: "40px Arial", fill: "#ffffff"});
		gameOverTitle.anchor.setTo(0.5,0.5);
        // For responsive information text is more useful
        var gameOverScore = this.game.add.text(400,300,"Final Score: " + this.score,
                        {font: "20px Arial", fill: "#ffffff"});
        gameOverScore.anchor.setTo(0.5,0.5);
	}
};