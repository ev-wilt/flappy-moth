function Moth() {
    let moth = new Sprite(scene, 'assets/moth.png', scene.width *.1, screen.height * .05);
    moth.setSpeed(0);
    moth.setBoundAction(CONTINUE);
    moth.flying = false;
    moth.prevTouchInput = 0;
    
    // Resets the moth to its default position.
    moth.reset = function() {
        this.setPosition(scene.width *.3, screen.height * .3);
    }

    // Makes the moth fly upward.
    moth.fly = function() {
        if (!this.flying) {
            this.flying = true;
            this.setImgAngle(75);
            this.setSpeed(0);
            this.addVector(0, 50);
            if (this.y < 50) {
                this.setY(50);
            }
        }
    }

    // Adds a gravity force to the moth.
    moth.applyGravity = function() {
        if (this.y > scene.height - 100) {
            this.setY(scene.height - 100);
        }
        else {
            this.addVector(180, 9.8);
            this.changeImgAngleBy(5);
        }
    }

    // Checks the current status of the space bar.
    moth.checkInput = function() {
        if (keysDown[K_SPACE] || flyButton.isClicked()) {
            this.fly();
        }
        else {
            this.flying = false;
        }
    }

    return moth;
}