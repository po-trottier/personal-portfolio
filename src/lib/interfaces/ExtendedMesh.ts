import type * as THREE from 'three';

export interface ExtendedMesh extends THREE.Mesh {
	initialRotation?: {
		x: number;
		y: number;
		z: number;
	};
}
