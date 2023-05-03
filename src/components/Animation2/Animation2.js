import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const Animation2 = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Create a new Three.js camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create a new Three.js renderer and set its size
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set the background color of the renderer to white
    const white = new THREE.Color();
    white.setHex(0xFFFFFF);
    renderer.setClearColor(white);

    // Enable shadows on the renderer
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.shadowMap.enabled = true;

    window.addEventListener('resize', function() 
    {
      let width = window.innerWidth;
      let height = window.innerHeight
      renderer.setSize(width,height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix( );
    })

    // Add the renderer to the DOM
    containerRef.current.appendChild(renderer.domElement);

    // Create a new Three.js torus knot and add it to the scene
    const geometry = new THREE.TorusKnotGeometry(10, 3, 300, 160);
    // (10, 20, 300, 160)
    const material = new THREE.MeshStandardMaterial({ color: 0xe0f3cb });
    const figure = new THREE.Mesh(geometry, material);
    figure.castShadow = true;
    figure.receiveShadow = true;
    scene.add(figure);

    // Add a light source to the scene
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    light.castShadow = true;
    scene.add(light);

    // Add a plane to receive shadows
    const planeGeometry = new THREE.PlaneGeometry(5, 5);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    // Position the camera so that it is pointing at the figure
    camera.position.z = 2;

    // Animate the figure
    const animate = function () {
      requestAnimationFrame(animate);
      figure.rotation.x += 0.0035;
      figure.rotation.y += 0.0035;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={containerRef} className='flex  justify-around h-1' />;
};

export default Animation2;


