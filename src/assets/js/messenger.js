const sketch = function (p) {


    let w = document.querySelector('#game-board');

    let width = w.clientWidth;
    let height = 300;

    var speed = 1;

    var alice;
    var bob;
    var thief;

    var bobGuess = "";
    var aliceGuess = "";
    var result = "";

    var al
    var bo;

    var message = p.random(0, 1000);

    p.setup = function () {
        console.log("performing setup of the game...");
        alice = new p.Group();
        bob = new p.Group();
        thief = new p.Group();

        let canvas = p.createCanvas(width, height);
        canvas.parent('#game-board');

        p.fill("rgb(250, 172, 232)");
    }

    p.draw = function () {
        p.background(0);

        if (alice.length < 20 && p.frameCount % 20 == 0) {
            p.createAlice(0, p.random(130, 190));
        }

        for (var i = 0; i < alice.length; i++) {
            if (alice[i].position.x > width) {
                alice[i].remove();
            }
        }

        if (bob.length < 20 && p.frameCount % 20 == 0) {
            p.createBob(width, p.random(130, 190));
        }

        for (var i = 0; i < bob.length; i++) {
            if (bob[i].position.x < 0) {
                bob[i].remove();
            }
        }

        if (aliceGuess != "" && bobGuess != "") {
            let r = aliceGuess * bobGuess;
            let resultSpace = document.getElementById('gameSpace');


            if (r == message) {
                let pNode = document.createElement('p');
                let text = document.createTextNode('YOU GOT IT');
                pNode.appendChild(text);
                resultSpace.appendChild(pNode);
                p.remove();
                // result = "YOU GOT IT!";
            } else {
                let pNode = document.createElement('p');
                let text = document.createTextNode('NO LUCK FOR YOU');
                pNode.appendChild(text);
                resultSpace.appendChild(pNode);
                p.remove();
                // result = "NO LUCK FOR YOU!"
            }
        }

        p.drawSprites();
    }

    p.createAlice = function (x, y) {
        // console.log("making an alice packet");
        al = p.createSprite(x, y, p.random(0, 30), 10);
        al.shapeColor = p.color("rgb(242, 173, 148)");
        al.velocity.x = 1;
        al.position.x = x;
        al.position.y = y;
        alice.add(al);
        al.onMousePressed = function () {
            console.log("mouse pressed Alice");
            if (aliceGuess == "") {
                aliceGuess = this.width;
            }
        }
    }

    p.createBob = function (x, y) {
        // console.log("making a Bob packet");
        bo = p.createSprite(x, y, p.random(0, 30), 10);
        bo.shapeColor = p.color("rgb(158, 210, 255)");
        bo.velocity.x = -1;
        bo.position.x = x;
        bo.position.y = y;
        bob.add(bo);
        bo.onMousePressed = function () {
            console.log("mouse pressed Bob");
            if (bobGuess == "") {
                bobGuess = this.width;
            }
        }
    }

}


export const game = (node) => {
    new p5(sketch, node);
}