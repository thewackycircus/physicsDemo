var world = world || {
    gameHeight: 600,
    gameWidth: 880,
};

let config = {
    type: Phaser.AUTO,
    width: world.gameWidth,
    height: world.gameHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function preload() {
    this.load.image('circle_img', 'assets/circle.png');
} //end of preload() 

function create() {
    let circle1X = 10;
    let circle1Y = 400;
    let circle2X = 300;
    let circle2Y = 450;
    // set up two circle objects
    this.circle1 = new Circle(this, 'circle_img', circle1X, circle1Y, 1, -1);
    this.circle2 = new Circle(this, 'circle_img', circle2X, circle2Y, -1, -1);
    this.add.existing(this.circle1);
    this.add.existing(this.circle2);
} // end of create()

function update() {
    if (this.circle1.findCollisionCircle(this.circle2)) {
        console.log("collision found");
    } else {
        console.log("Moving them");
        this.circle1.move();
        this.circle2.move();
    }
} // end of update()

let game = new Phaser.Game(config);