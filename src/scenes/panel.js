import Scene from '../scene';
import {
    Graphics,
    Container
} from 'pixi.js';

export default class Panel extends Scene {
    constructor({
        width,
        height,
        backdropWidth,
        backdropHeight,
        hasBackdrop = true
    }) {
        super();

        let ctx = new Graphics();
        this.w = width;
        this.h = height;
        this.backdropWidth = backdropWidth;
        this.backdropHeight = backdropHeight;

        this.body = new Container();
        this.background = undefined;
        this.backdrop = undefined;

        ctx.beginFill(0xf5f5f5);
        ctx.lineStyle(3, 0x808080);
        this.background = ctx.drawRoundedRect(0, 0, width, height, 10);
        this.body.addChild(this.background);
        this.body.position.set(width / 2, height / 2);

        if (hasBackdrop) {
            ctx = new Graphics();
            ctx.beginFill(0x383c42, 0.8);
            this.backdrop = ctx.drawRect(0, 0, backdropWidth, backdropHeight);
            this.backdrop.interactive = true;
            this.addChild(this.backdrop);
        }
        
        this.addChild(this.body);
    }

    putCenter(centerX, centerY) {
        if (centerX && centerY)
            this.body.position.set(centerX, centerY);
        else
            this.body.position.set(
                this.backdropWidth / 2 - this.w / 2,
                this.backdropHeight / 2 - this.h / 2);
    }

    update(delta) {

    }
}