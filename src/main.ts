import './style.css'

import {
  BufferGeometry,
  Color,
  DodecahedronGeometry,
  DoubleSide,
  EdgesGeometry,
  Float32BufferAttribute,
  Group,
  LineSegments,
  LineBasicMaterial,
  Mesh,
  MeshPhongMaterial,
  NormalBufferAttributes,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer
} from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function updateGroupGeometry( mesh: Group, geometry: BufferGeometry<NormalBufferAttributes> ) {

  mesh.children[ 0 ].geometry.dispose();
  mesh.children[ 1 ].geometry.dispose();

  mesh.children[ 0 ].geometry = new EdgesGeometry( geometry );
  mesh.children[ 1 ].geometry = geometry;

}

function dodecahedronGeometry( mesh: Group ) {

  updateGroupGeometry( mesh, new DodecahedronGeometry( 15, 0 ) );

}

const scene = new Scene();
scene.background = new Color( 0x0ca5b0 );

const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 50 );
camera.position.z = 30;

const renderer = new WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const orbit = new OrbitControls( camera, renderer.domElement );
orbit.enablePan = false;
orbit.enableZoom = false;
orbit.autoRotate = true;
orbit.enableDamping = true;

const lights = [];
lights[ 0 ] = new PointLight( 0xffffff, 1, 0 );
lights[ 1 ] = new PointLight( 0xffffff, 1, 0 );
lights[ 2 ] = new PointLight( 0xffffff, 1, 0 );

lights[ 0 ].position.set( 0, 200, 0 );
lights[ 1 ].position.set( 100, 200, 100 );
lights[ 2 ].position.set( - 100, - 200, - 100 );

scene.add( lights[ 0 ] );
scene.add( lights[ 1 ] );
scene.add( lights[ 2 ] );

const group = new Group();

const geometry = new BufferGeometry();
geometry.setAttribute( 'position', new Float32BufferAttribute( [], 3 ) );

const lineMaterial = new LineBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5 } );
const meshMaterial = new MeshPhongMaterial( { color: 0x156289, emissive: 0x072534, side: DoubleSide, flatShading: true } );

group.add( new LineSegments( geometry, lineMaterial ) );
group.add( new Mesh( geometry, meshMaterial ) );

dodecahedronGeometry( group );

scene.add( group );

function render() {

  orbit.update();

  requestAnimationFrame( render );

  renderer.render( scene, camera );

}

window.addEventListener( 'resize', function () {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}, false );

render();