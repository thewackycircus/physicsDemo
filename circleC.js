class Circle extends Phaser.GameObjects.Image {
    constructor(scene, texture, x, y, xMov, yMov) {
        super(scene, x, y, texture);
        this._xMov = xMov; //private property
        this._yMov = yMov;
        this.radius = (this.width - 2) / 2;
    } //end of constructor()

    move() {
        //public method to move the circle
        this.x += this._xMov;
        this.y += this._yMov;
    }; //end of move()

    findCollisionCircle(otherCircle) {
        // Determine whether otherCircle has collided with this, 
        // if have, return true
        console.log("Circle: Into findCollisionCircle()");
        var collide_bool = false;
        var xDiff = this.x - otherCircle.x;
        var yDiff = this.y - otherCircle.y;
        var distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        collide_bool = (distance <= this.radius + otherCircle.radius);
        return (collide_bool);
    } // end of findCollisionCircle()
} //end of Circle class
