// please switch to `next-compressed` version to see this demo

var app = new PIXI.Application(800, 600, {backgroundColor: 0x308030});
document.body.appendChild(app.view);

//compressed textures setup

var loader = new PIXI.Loader('http://pixijs.io/examples/');

var textStyle = { fill: 0xffffff };
function createSprite(texture, text) {
    var sprite = new PIXI.Sprite(texture);
    sprite.addChild(new PIXI.Text(text, textStyle));
    sprite.anchor.set(0.5, 1);
    sprite.children[0].anchor.set(0.5, 0);
    sprite.interactive=true;
    sprite.on('click', function() { this.alpha = 1.7 - this.alpha; } );
    return sprite;
}

loader.add('house_png', 'required/assets/compressed/dracula_house_4.png')
    .add('house_png_2', 'required/assets/compressed/dracula_house_4.png?v=2')
    .add('house_dds', 'required/assets/compressed/dracula_house_4.dds', { crossOrigin: true })
    .add('house_dds_2', 'required/assets/compressed/dracula_house_4.dds?v=2', { crossOrigin: true  })
    .load(function(loader, resources) {
        var spr1 = createSprite(resources.house_png.texture, "PNG premultiplied=true, good");
        var spr2 = createSprite(resources.house_png_2.texture, "PNG premultiplied=false, bad");
        var spr3 = createSprite(resources.house_dds.texture, "DDS premultiplied=true, bad");
        var spr4 = createSprite(resources.house_dds_2.texture, "DDS premultiplied=false, good");

        resources.house_png.texture.baseTexture.premultiplyAlpha = true;
        resources.house_dds.texture.baseTexture.premultiplyAlpha = true;
        resources.house_dds_2.texture.baseTexture.premultiplyAlpha = false;

        // just a hack to actually show the consequences of wrong value of the flag
        app.ticker.add(() => {
            resources.house_png_2.texture.baseTexture.premultiplyAlpha = false;
        });

        spr1.position.set(250, 250);
        spr1.scale.set(0.6);

        spr2.position.set(550, 250);
        spr2.scale.set(0.6);

        spr3.position.set(250, 550);
        spr3.scale.set(0.6);

        spr4.position.set(550, 550);
        spr4.scale.set(0.6);

        app.stage.addChild(spr1, spr2, spr3, spr4);

    });
