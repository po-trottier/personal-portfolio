import type { Mesh } from 'three';

export interface ExtendedMesh extends Mesh {
	initialRotation?: {
		x: number;
		y: number;
		z: number;
	};
}
