import {
    BufferGeometry,
    Color,
    EdgesGeometry,
    Float32BufferAttribute,
    Group,
    LineSegments,
    LineBasicMaterial,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from 'three';

import { DodecahedronGeometry } from './geometry/dodecahedron';
import { shuffle } from '../utils/array';

export const render = () => {
    const colors = [0xF94144, 0xF3722C, 0xF8961E, 0xF9C74F, 0x90BE6D, 0x43AA8B, 0x577590];

    const [backgroundColor, ...meshColors] = shuffle(colors);

    const scene = new Scene();
    scene.background = new Color(backgroundColor);

    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50);
    camera.position.z = 30;

    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const group = new Group();

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute([], 3));

    const lineMaterial = new LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
    const meshMaterials = [
        ...meshColors.map(color => new MeshBasicMaterial({ color })),
        ...meshColors.map(color => new MeshBasicMaterial({ color }))
    ];

    group.add(new LineSegments(geometry, lineMaterial));
    group.add(new Mesh(geometry, meshMaterials));

    group.children[0].geometry.dispose();
    group.children[1].geometry.dispose();

    const docecahedron = new DodecahedronGeometry(15, 0);

    group.children[0].geometry = new EdgesGeometry(docecahedron);
    group.children[1].geometry = docecahedron;

    scene.add(group);

    function render() {

        requestAnimationFrame(render);

        group.rotation.x += 0.002;
        group.rotation.y += 0.002;

        renderer.render(scene, camera);

    }

    window.addEventListener('resize', function () {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }, false);

    render();
}