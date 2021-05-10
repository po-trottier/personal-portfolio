import * as THREE from 'three';
import { Geometry } from './geometry';
import { radians } from '$lib/helpers/math';

export class Box extends Geometry {
	constructor() {
		super();
		this.geometry = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5);
		this.rotationX = radians(45);
		this.rotationY = radians(45);
		this.rotationZ = radians(45);
		this.type = 'box';
	}
}
