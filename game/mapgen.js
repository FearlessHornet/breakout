var PAD_Y = 50;
var PAD_X = 120;
var ROW_HEIGHT = 24;
var COLUMN_WIDTH = 36;
var BRICK_TYPE_COUNT = 5;

play.prototype.mapgen = function(rows,width) {
    var x;
    var y;
    var brick;

    for (var row = 0; row < rows; row++)
    {
        y = PAD_Y + (row * ROW_HEIGHT);
        for (var column = 0; column < width; column++)
        {
            x = PAD_X + (column * COLUMN_WIDTH);
            brick = this.bricks.create(x, y, 'brick' + (row % BRICK_TYPE_COUNT));
            brick.body.bounce.set(1);
            brick.body.immovable = true;
        }
    }
};