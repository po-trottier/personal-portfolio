import { ConeBufferGeometry } from 'three';
import { Geometry } from './geometry';
import { radians } from '$lib/helpers/math';

export class Cone extends Geometry {
	constructor() {
		super();
		this.geometry = new ConeBufferGeometry(0.3, 0.5, 32);
		this.rotationX = radians(80);
		this.rotationY = radians(-80);
		this.rotationZ = radians(80);
		this.type = 'cone';
	}
}
