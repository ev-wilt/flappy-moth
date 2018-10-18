function Background() {
    let background = new Sprite(scene, 'assets/background.png', 1800, 800);
    background.setSpeed(-5);
    background.setBoundAction(CONTINUE);
    background.setY(400);
 
    background.wrap = function() {
        if (background.x < -250) {
            background.setX(850);
        }
    }
    return background;
}