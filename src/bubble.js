let bubble = document.getElementById("bubble");

//c === context. returning a drawing context to c. creating a super object, use to draw on canvas
let ctx = bubble.getContext('2d');

// let mouse = {
//     x: undefined,
//     y: undefined
// }

// bubble.addEventListener('mousemove',
//     (event) => {
//         mouse.x = (event.x / (bubble.width));
//         mouse.y = (event.y / (bubble.height));
//         console.log(mouse.x)
//     }
// )

const colorArr = [
    '00a8e8',
    '#007ea7',
    '#003459',
    '#00171f',
]

function Bubble(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.color = colorArr[Math.floor(Math.random() * colorArr.length)];

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color
        ctx.fill();
    }

    this.update = () => {
        if (this.x + this.radius >= bubble.width || this.x - this.radius <= 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius >= bubble.height || this.y - this.radius <= 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // if (mouse.x - this.x < 1 && mouse.x - this.x > -1 
        //     && mouse.y - this.y < 50 && mouse.y - this.y > -50 ) {
        //     this.radius += 1;
        // } else if (this.radius > 2){
        //     this.radius -= 1;
        // }

        this.draw();
    }
}

const bubbleArr = [];

for (let i = 0; i < 60; i++) {
    let radius = Math.random() * 10 + 1;
    let x = Math.random() * (bubble.width - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let y = Math.random() * (bubble.height - radius * 2) + radius;
    let dy = (Math.random() - 0.5) * 3;
    let bubbles = new Bubble(x, y, dx, dy, radius);
   
    bubbleArr.push(bubbles);
}
//refresh the page, increment x, y coordinates little by little to "animate"
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, bubble.width, bubble.height);

    for (let i = 0; i < bubbleArr.length; i++) {
        bubbleArr[i].update();
    }

}

animate();
