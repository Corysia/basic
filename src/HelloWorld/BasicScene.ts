import { Scene, Engine, Vector3, MeshBuilder, HemisphericLight, FreeCamera } from '@babylonjs/core'

export class BasicScene {

    scene: Scene;
    engine: Engine;

    constructor(private canvas:HTMLCanvasElement) {
        this.engine = new Engine(canvas, true);
        this.scene = this.CreateScene();

        window.addEventListener("resize", () => {
            this.engine.resize();
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