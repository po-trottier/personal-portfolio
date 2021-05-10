import { TorusBufferGeometry } from 'three';
import { Geometry } from './geometry';
import { radians } from '$lib/helpers/math';

export class Torus extends Geometry {
	constructor() {
		super();
		this.geometry = new TorusBufferGeometry(0.3, 0.12, 30, 200);
		this.rotationX = radians(60);
		this.rotationY = radians(30);
		this.rotationZ = 0;
		this.type = 'torus';
	}
}
