// Constants
// Settings
var PHYSICS_TYPE = Phaser.Physics.ARCADE;
// Map Generation
var BRICK_ROWS = 7;
var BRICK_COLS = 16;
// Graphics
var STYLE_TEXT = {font: "20px Arial", fill: "#ffffff", align: "center"};
var BALL_SPIN_ANIMATION = [
    'asset/ball_1.png',
    'asset/ball_2.png',
    'asset/ball_3.png',
    'asset/ball_4.png',
    'asset/ball_5.png'
];
// Gameplay
var INIT_LIVES = 3;
var LAUNCH_SPEED_Y = -300;
var LAUNCH_SPEED_X = -75;
// UI
var PADDLE_HEIGHT = 500;
var SCORE_X = 200;
var SCORE_Y = 550;
var LIVES_X = 600;
var LIVES_Y = 550;

play.prototype = {
    preload: function(){
        this.game.physics.startSystem(PHYSICS_TYPE);

        // We need an exception to the wall bounds
        this.game.physics.arcade.checkCollision.down = false;
        
        // Load in the sprites
        // Paddle
        this.paddle = this.game.add.sprite(this.game.world.centerX,
                                                PADDLE_HEIGHT, "paddle");
        this.paddle.anchor.setTo(0.5, 0.5);
        // Ball
        this.ball = this.game.add.sprite(this.game.world.centerX,
                                            this.paddle.y - 16, "ball");
        this.ball.anchor.set(0.5);
        
        // Define the physics
        // Bricks
        this.bricks = this.game.add.group();
        this.bricks.enableBody = true;
        this.bricks.physicsBodyType = PHYSICS_TYPE;        
        // Paddle
        this.game.physics.enable(this.paddle, PHYSICS_TYPE);
        this.paddle.body.collideWorldBounds = true;
        this.paddle.body.bounce.set(1);
        this.paddle.body.immovable = true;
        // Ball
        this.ball.checkWorldBounds = true;
        this.game.physics.enable(this.ball, PHYSICS_TYPE);
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.set(1);
    },
    create: function(){
        // Set starting game variables
        this.lives = INIT_LIVES;
        this.activeGame = false;
        this.score = 0;
        this.mapgen(BRICK_ROWS, BRICK_COLS);
        // Set text items with default values
        this.scoreText = this.game.add.text(SCORE_X, SCORE_Y, 'score: 0', STYLE_TEXT);
        this.scoreText.anchor.setTo(0.5,0.5);
        this.livesText = this.game.add.text(LIVES_X, LIVES_Y,
                                                'lives: ' + INIT_LIVES, STYLE_TEXT);
        this.livesText.anchor.setTo(0.5,0.5);
        
        // Bind callbacks
        this.ball.events.onOutOfBounds.add(this.loseLife, this);
        this.game.input.onDown.add(this.release, this);
    },
    update: function() {
        // Grab the input horizontal
        this.paddle.x = this.game.input.x;
        
        // Bound the paddle to within the game
        if (this.paddle.x < 30) {
            this.paddle.x = 30;
        } else if (this.paddle.x > this.game.width - 30) {
            this.paddle.x = this.game.width - 30;
        }
        
        // Handle the ball
        if (!this.activeGame) {
            this.ball.body.x = this.paddle.x;
        } else {
            // Hook a callback to collision event with this as context
            this.game.physics.arcade.collide(this.ball, this.paddle,
                                                this.hitPaddle, null, this);
            this.game.physics.arcade.collide(this.ball, this.bricks,
                                                this.hitBrick, null,this);
        }
    },
    release: function(){
        // Check that the ball is on the paddle
        if (!this.activeGame) {
            this.activeGame = true;
            this.ball.body.velocity.y = LAUNCH_SPEED_Y;
            this.ball.body.velocity.x = LAUNCH_SPEED_X;
        }
    },
    loseLife: function(){
        this.lives--;
        this.livesText.text = 'lives: ' + this.lives;
        
        // Check for failure state
        if (this.lives === 0) {
            this.game.state.start("GameOver", true, false, this.score);
        } else {
            this.activeGame = false;
            this.ball.reset(this.paddle.body.x + 16, this.paddle.y - 16);
            this.ball.animations.stop();
        }
    },
    hitBrick: function(_ball, _brick){
        // Remove the hit brick
        _brick.kill();
        
        // Update score
        this.score += 10;
        this.scoreText.text = 'score: ' + this.score;
        
        // Check for win condition
        if (this.bricks.countLiving() === 0) {
            this.game.state.start("NextLevel", true, false, this.score);
        }
    }
};