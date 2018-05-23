import bunnyImg from './assets/bunny.png';

const app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

const bunny = PIXI.Sprite.fromImage(bunnyImg);

bunny.anchor.set(0.5);
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);
app.ticker.add(d => (bunny.rotation += 0.1 * d));
