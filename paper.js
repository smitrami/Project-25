class Paper {
    constructor(x, y, radius) {
        var options =
        {
            isStatic: false,
            restitution: 0.2,
            friction: 1.0,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        ellipse(this.image, this.body.position.x, this.body.position.y, 50);
        pop();
        image(this.image, this.body.position.x, this.body.position.y, 70, 70);
    }
}