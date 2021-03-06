import React, { Component } from 'react';

import * as THREE from 'three';

import OrbitControls from 'three-orbitcontrols';

import * as CHEVROTAIN from 'chevrotain';

import { dataBase } from './models';

window.THREE = THREE;
window.chevrotain = CHEVROTAIN;
require('three/examples/js/loaders/VRMLLoader');

class ThreeWorkspace extends Component {
    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.option !== this.props.option) {
            this.addCustomSceneObjects();
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
        window.cancelAnimationFrame(this.requestID);
        this.controls.dispose();
    }
    
    render() {
        return <div className="three_container" ref={ref => (this.el = ref)} />;
    }

    sceneSetup = () => {
        // get container dimensions and use them for scene sizing
        const width = this.el.clientWidth;
        const height = this.el.clientHeight;

        this.camera = new THREE.PerspectiveCamera(
            60, // fov = field of view
            width / height, // aspect ratio
            0.01, // near plane
            1e10 // far plane
            );
        this.camera.position.z = -100;    
            
        this.scene = new THREE.Scene();
        this.scene.add(this.camera);

        const dirLight = new THREE.DirectionalLight( 0xffffff );
        dirLight.position.set( 200, 200, 1000 ).normalize();
        this.camera.add( dirLight );
        this.camera.add( dirLight.target );

        // OrbitControls allow a camera to orbit around the object
        // https://threejs.org/docs/#examples/controls/OrbitControls
        this.controls = new OrbitControls(this.camera, this.el);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio( window.devicePixelRatio )
        this.renderer.setSize(width, height);
        // this.renderer.vr.enabled = true;
        this.el.appendChild(this.renderer.domElement); // mount using React ref
    };

    addCustomSceneObjects = () => {
        
        const { grupo, option } = this.props;

        console.log('OBJECT: grupo/option', grupo, '/', option)

        const toRemove = this.scene.getObjectByName('targetObject');
        if(toRemove) this.scene.remove(toRemove);

        const loader = new window.THREE.VRMLLoader();
        loader.load(dataBase[grupo].options[option].object, (object) => {
            this.props.onRendering(false);

            object.name = 'targetObject';
            this.scene.add(object);
        },
        ( xhr ) => {
            const percent = xhr.loaded / xhr.total * 100;    

            // called while loading is progressing
            this.props.onProgress(percent);

            // if 100, starting rendering
            if(percent === 100) this.props.onRendering(true);
        },
        ( error ) => {
            // called when loading has errors
            console.error( 'An error happened', error );
        },);
        
    };

    startAnimationLoop = () => {
        if(this.props.animate) {
            const toAnimate = this.scene.getObjectByName('targetObject');
            if(toAnimate) {
                toAnimate.rotation.y += 0.005;
            }
        }

        this.renderer.render(this.scene, this.camera);

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        const width = this.el.clientWidth;
        const height = this.el.clientHeight;
    
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
    
        this.camera.updateProjectionMatrix();
    };
}

export default ThreeWorkspace;