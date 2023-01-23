import {
    CubeTexture,
    ArcRotateCamera,
    AbstractMesh,
    Engine,
    Scene,
    Vector3,
    SceneLoader,
    StandardMaterial,
    PBRMaterial,
    Color3,
    Texture,
} from "@babylonjs/core"
import "@babylonjs/loaders"
import "@babylonjs/materials"

export class Product3D {
    scene: Scene;
    engine: Engine;
    product!: AbstractMesh;
    camera!: ArcRotateCamera;

    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();
        this.engine.displayLoadingUI();

        this.CreateCamera();
        this.CreateProduct();

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    CreateScene(): Scene {
        const scene = new Scene(this.engine);
        const envTexture = CubeTexture.CreateFromPrefilteredData(
            "./environment/xmas_bg.env",
            scene
        );
        envTexture.gammaSpace = false;
        envTexture.rotationY = Math.PI;
        scene.environmentTexture = envTexture;
        scene.createDefaultSkybox(envTexture, true, 1000, 0.25);
        return scene;
    }

    CreateCamera(): void {
        this.camera = new ArcRotateCamera(
            "camera",
            -Math.PI / 2,
            Math.PI / 2,
            40,
            new Vector3(0,0,0),
            this.scene
        );

        this.camera.attachControl(this.canvas, true);
        this.camera.wheelPrecision = 100;
        this.camera.minZ = 0.01;
        this.camera.lowerRadiusLimit = 1;
        this.camera.upperRadiusLimit = 5;
        this.camera.panningSensibility = 0;

        this.camera.useAutoRotationBehavior = true;
        this.camera.autoRotationBehavior!.idleRotationSpeed = 0.5;
        this.camera.autoRotationBehavior!.idleRotationSpinupTime = 1000;
        this.camera.autoRotationBehavior!.idleRotationWaitTime = 2000;
        this.camera.autoRotationBehavior!.zoomStopsAnimation = true;

        this.camera.useFramingBehavior = true;
        this.camera.framingBehavior!.framingTime = 4000;

    }

    async CreateProduct(): Promise<void> {
        const { meshes } = await SceneLoader.ImportMeshAsync("", "./models/", "horse_statue.glb");
        this.product = meshes[1];

        // meshes[0].showBoundingBox = true;
        // meshes[1].showBoundingBox = true;
        // meshes[2].showBoundingBox = true;
        this.camera.setTarget(meshes[1]);
        this.engine.hideLoadingUI();
    }
}
