function ZapperPair() {
    let zapperPair = {
        high: new Sprite(scene, 'assets/zapper.png', 100, 600),
        low: new Sprite(scene, 'assets/zapper.png', 100, 600)
    };
    
    zapperPair.high.setSpeed(-10);
    zapperPair.low.setSpeed(-10);
    zapperPair.high.setBoundAction(CONTINUE);
    zapperPair.low.setBoundAction(CONTINUE);

    zapperPair.setSpeed = function(speed) {
        zapperPair.high.setSpeed(speed);
        zapperPair.low.setSpeed(speed);
    }

    zapperPair.update = function() {
        zapperPair.high.update();
        zapperPair.low.update();
    }

    // Set high to a rand value between -200 and 200
    // Set low to be 850 pixels below that
    zapperPair.reset = function(x) {
        const upperZapperY = Math.floor(Math.random() * 201) - 200;
        this.high.setPosition(x, upperZapperY);
        this.low.setPosition(x, upperZapperY + 850);
    }

    return zapperPair;
}