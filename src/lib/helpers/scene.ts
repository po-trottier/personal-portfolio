import {
	AmbientLight,
	Mesh,
	MeshPhysicalMaterial,
	Object3D,
	PCFSoftShadowMap,
	PerspectiveCamera,
	PlaneGeometry,
	PointLight,
	Raycaster,
	RectAreaLight,
	Scene,
	ShadowMaterial,
	SpotLight,
	Vector2,
	WebGLRenderer
} from 'three';
import { TweenMax, Expo } from 'gsap';
import { Cone } from '$lib/geometry/cone';
import { Torus } from '$lib/geometry/torus';
import { Box } from '$lib/geometry/box';
import { distance, map, radians } from '$lib/helpers/math';
import type { Geometry } from '$lib/geometry/geometry';
import type { ExtendedMesh } from '$lib/interfaces/ExtendedMesh';

export class OverlayScene {
	private static ROW_RATIO = 140;
	private static COL_RATIO = 140;

	private element: HTMLCanvasElement;

	private renderer: WebGLRenderer;
	private scene: Scene;
	private camera: PerspectiveCamera;

	private gutter: { size: number };
	private grid: { rows: number; cols: number };
	private meshes: ExtendedMesh[][];
	private width: number;
	private height: number;
	private mouse3D: Vector2;
	private geometries: Geometry[];
	private raycaster: Raycaster;
	private floor: Mesh;
	private groupMesh: Object3D;

	constructor(element: HTMLCanvasElement) {
		this.element = element;
	}

	// Public Methods

	public setup(): void {
		this.initialize();
		this.createScene();
		this.createCamera();
		this.createGrid();

		this.addFloor();

		this.addAmbientLight();
		this.addSpotLight();
		this.addRectLight();

		this.addPointLight('#00b7ff', { x: 0, y: 10, z: -100 });
		this.addPointLight('#3e4b79', { x: 100, y: 10, z: 0 });
		this.addPointLight('#8239c2', { x: 20, y: 5, z: 20 });

		this.animate();

		window.addEventListener('resize', this.onResize.bind(this));
		window.addEventListener('mousemove', this.onMouseMove.bind(this), false);

		this.onMouseMove({ clientX: 0, clientY: 0 });
	}

	public animate(): void {
		this.draw();
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(this.animate.bind(this));
	}

	// Private Methods

	private initialize(): void {
		this.gutter = { size: 2.5 };
		this.meshes = [];
		this.width = this.element.clientWidth;
		this.height = this.element.clientHeight;
		this.grid = {
			rows: Math.max(Math.floor(this.height / OverlayScene.ROW_RATIO), 10),
			cols: Math.max(Math.floor(this.width / OverlayScene.COL_RATIO), 6)
		};
		this.mouse3D = new Vector2();
		this.raycaster = new Raycaster();
		this.geometries = [new Box(), new Cone(), new Torus()];
	}

	private createScene(): void {
		this.scene = new Scene();

		this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
		this.renderer.setSize(this.width, this.height);
		this.renderer.setPixelRatio(window.devicePixelRatio);

		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = PCFSoftShadowMap;
		this.element.appendChild(this.renderer.domElement);
	}

	private createCamera(): void {
		this.camera = new PerspectiveCamera(20, this.width / this.height, 1);
		this.camera.position.set(0, 65, 0);
		this.camera.rotation.x = -1.57;

		this.scene.add(this.camera);
	}

	private addAmbientLight(): void {
		const light = new AmbientLight('#ffffff', 1);

		this.scene.add(light);
	}

	private addSpotLight(): void {
		const light = new SpotLight('#7b80d7', 1, 1000);

		light.position.set(0, 27, 0);
		light.castShadow = true;

		this.scene.add(light);
	}

	private addRectLight(): void {
		const light = new RectAreaLight('#121334', 1, 2000, 2000);

		light.position.set(5, 50, 50);
		light.lookAt(0, 0, 0);

		this.scene.add(light);
	}

	private addPointLight(color, position): void {
		const light = new PointLight(color, 1, 1000, 1);

		light.position.set(position.x, position.y, position.z);

		this.scene.add(light);
	}

	private addFloor(): void {
		const geometry = new PlaneGeometry(100, 100);
		const material = new ShadowMaterial({ opacity: 0.3 });

		this.floor = new Mesh(geometry, material);
		this.floor.position.y = 0;
		this.floor.receiveShadow = true;
		this.floor.rotateX(-Math.PI / 2);

		this.scene.add(this.floor);
	}

	private getRandomGeometry(): Geometry {
		const random = Math.random();

		let index;
		if (random <= 0.33) index = 0;
		else if (random <= 0.66) index = 1;
		else index = 2;

		return this.geometries[index];
	}

	private createGrid(): void {
		// Clear previous grid
		this.scene.remove(this.groupMesh);

		this.groupMesh = new Object3D();

		const material = new MeshPhysicalMaterial({
			color: '#1e1e40',
			metalness: 0.58,
			emissive: '#000000',
			roughness: 0.3,
			reflectivity: 0.2,
			transparent: true,
			opacity: 0.75
		});

		for (let row = 0; row < this.grid.rows; row++) {
			this.meshes[row] = [];

			for (let col = 0; col < this.grid.cols; col++) {
				const geometry = this.getRandomGeometry();
				const mesh = OverlayScene.getMesh(geometry.geometry, material);

				mesh.position.y = 0;
				mesh.position.x = col * this.gutter.size;
				mesh.position.z = row * this.gutter.size;

				const random = Math.random();

				mesh.rotation.x = geometry.rotationX * random;
				mesh.rotation.y = geometry.rotationY * random;
				mesh.rotation.z = geometry.rotationZ * random;

				mesh.initialRotation = {
					x: mesh.rotation.x,
					y: mesh.rotation.y,
					z: mesh.rotation.z
				};

				this.groupMesh.add(mesh);

				this.meshes[row][col] = mesh;
			}
		}

		const centerX = -((this.grid.cols - 1) / 2) * this.gutter.size;
		const centerZ = -((this.grid.rows - 1) / 2) * this.gutter.size;

		this.groupMesh.position.set(centerX, 0, centerZ);

		this.scene.add(this.groupMesh);
	}

	private draw(): void {
		this.raycaster.setFromCamera(this.mouse3D, this.camera);

		const intersects = this.raycaster.intersectObjects([this.floor]);

		if (intersects.length) {
			const { x, z } = intersects[0].point;

			for (let row = 0; row < this.grid.rows; row++) {
				for (let index = 0; index < 1; index++) {
					for (let col = 0; col < this.grid.cols; col++) {
						const mesh = this.meshes[row][col];

						const mouseDistance = distance(
							x,
							z,
							mesh.position.x + this.groupMesh.position.x,
							mesh.position.z + this.groupMesh.position.z
						);

						const y = map(mouseDistance, 6, 0, 0, 6);
						TweenMax.to(mesh.position, 0.3, { y: y < 1 ? 1 : y });

						const scaleFactor = mesh.position.y / 1.5;
						const scale = scaleFactor < 1 ? 1 : scaleFactor;
						TweenMax.to(mesh.scale, 0.3, {
							ease: Expo.easeOut,
							x: scale,
							y: scale,
							z: scale
						});

						TweenMax.to(mesh.rotation, 0.7, {
							ease: Expo.easeOut,
							x: map(mesh.position.y, -1, 1, radians(180), mesh.initialRotation.x),
							z: map(mesh.position.y, -1, 1, radians(90), mesh.initialRotation.z),
							y: map(mesh.position.y, -1, 1, radians(90), mesh.initialRotation.y)
						});
					}
				}
			}
		}
	}

	// Event Listeners

	private onMouseMove({ clientX, clientY }): void {
		this.mouse3D.x = (clientX / this.width) * 2 - 1;
		this.mouse3D.y = -(clientY / this.height) * 2 + 1;
	}

	private onResize(): void {
		this.width = this.element.clientWidth;
		this.height = this.element.clientHeight;
		this.grid = {
			rows: Math.floor(this.height / OverlayScene.ROW_RATIO),
			cols: Math.floor(this.width / OverlayScene.COL_RATIO)
		};
		this.createGrid();
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.width, this.height);
	}

	// Static Methods

	private static getMesh(geometry, material): ExtendedMesh {
		const mesh = new Mesh(geometry, material);
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		return mesh;
	}
}
