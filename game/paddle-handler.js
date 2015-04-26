// Handle physics behaviour when the ball hits the paddle

play.prototype.hitPaddle = function(_ball, _paddle){
    var diff = 0;

    if (_ball.x < _paddle.x) {
        diff = _paddle.x - _ball.x;
        _ball.body.velocity.x = (-10 * diff);
    } else if (_ball.x > _paddle.x) {
        diff = _ball.x -_paddle.x;
        _ball.body.velocity.x = (10 * diff);
    } else {
        //  Ball is perfectly in the middle
        //  Add a little random X to stop it bouncing straight up!
        _ball.body.velocity.x = 2 + Math.random() * 8;
    }
};