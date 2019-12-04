var can, ctx;

const CAN_W = 600;
const CAN_H = 400;
const SURFACE_LEVEL = 0.1 * CAN_H;
const CAVERN_LEVEL = 0.2 * CAN_H;
const LAVA_LEVEL = 0.9 * CAN_H;
const FPS = 24;

const COLORS = {
    'dirt': '#614720',
    'grass': '#1d5920',
    'stone': '#524e49',
    'lava': '#e66f0e',
    'air': '#adc5d9'
}

var world;

function init() {
    can = document.getElementById('can');
    ctx = can.getContext('2d');

    can.width = CAN_W;
    can.height = CAN_H;

    world = new Array(CAN_W);

    generateWorld();
    setInterval(loop, 1000/FPS);
}

function generateWorld() {
    for (let x = 0; x < CAN_W; x++) {
        world[x] = [];
        for (let y = 0; y < CAN_H; y++) {
            if(y > SURFACE_LEVEL && y < CAVERN_LEVEL) world[x][y] = COLORS.dirt;
            else if (y == SURFACE_LEVEL) world[x][y] = COLORS.grass;
            else if(y >= CAVERN_LEVEL && y < LAVA_LEVEL) world[x][y] = COLORS.stone;
            else if(y >= LAVA_LEVEL) world[x][y] = COLORS.lava;
            else world[x][y] = COLORS.air;
        }
    }
}

function loop() {
    draw();
}

function draw() {
    for (let x = 0; x < CAN_W; x++) {
        for (let y = 0; y < CAN_H; y++) {
            ctx.fillStyle = world[x][y];
            ctx.fillRect(x, y, 1, 1);
        }
    }
}