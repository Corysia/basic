import { Scene, Engine, Vector3, MeshBuilder, HemisphericLight, FreeCamera } from '@babylonjs/core'
import '@babylonjs/inspector'
import "@babylonjs/core/Debug/debugLayer";

export class BasicScene {

    scene: Scene;
    engine: Engine;

    constructor(private canvas:HTMLCanvasElement) {
        this.engine = new Engine(canvas, true);
        this.scene = this.CreateScene();

        window.addEventListener("resize", () => {
            this.engine.resize();
        });

        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (this.scene.debugLayer.isVisible()) {
                    this.scene.debugLayer.hide();
                } else {
                    this.scene.debugLayer.show();
                }
            }
        });

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    CreateScene(): Scene {
        const scene = new Scene(this.engine);
        const camera = new FreeCamera("camera1", new Vector3(0, 1, -5), scene);
        camera.attachControl(this.canvas, true);
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
        const ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);
        const sphere = MeshBuilder.CreateSphere("sphere", {diameter: 2}, scene);
        sphere.position.y = 1;
        
        return scene;
    }
}