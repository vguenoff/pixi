import { loop } from "./00-utils";

const app = new PIXI.Application();
document.body.appendChild(app.view);

PIXI.loader.add("assets/images/fighter.json").load(() => {
    const frames = [];

    loop(30, i => {
        const val = i < 10 ? `0${i}` : i;

        frames.push(PIXI.Texture.fromFrame(`rollSequence00${val}.png`));
    });

    const anim = new PIXI.extras.AnimatedSprite(frames);

    anim.x = app.screen.width / 2;
    anim.y = app.screen.height / 2;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.5;
    anim.play();

    app.stage.addChild(anim);

    app.ticker.add(() => (anim.rotation += 0.01));
});
