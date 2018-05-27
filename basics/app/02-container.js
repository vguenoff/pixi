import { loop } from "./00-utils";

import bunnyImg from "../assets/images/bunny.png";

const app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

const texture = PIXI.Texture.fromImage(bunnyImg);

loop(25, i => {
    const bunny = new PIXI.Sprite(texture);

    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;

    container.addChild(bunny);
});

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

app.ticker.add(d => (container.rotation -= 0.01 * d));
