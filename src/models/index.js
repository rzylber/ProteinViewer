import wrmlDomain1 from './domain/DomainNative.wrl';
import wrmlDomain2 from './domain/DomainMutante.wrl';
import wrmlDomain3 from './domain/DomainNativeSurface.wrl';
import wrmlDomain4 from './domain/DomainNativeSurface.wrl';

import wrmlInterface1 from './interface/NativeInterface.wrl';
import wrmlInterface2 from './interface/MutanteInterface.wrl';
import wrmlInterface3 from './interface/NativeMutInterface.wrl';
import wrmlInterface4 from './interface/NativeInterfaceSurface.wrl';
import wrmlInterface5 from './interface/MutanteInterfaceSurface.wrl';
import wrmlInterface6 from './interface/NativeMutInterfaceSurface.wrl';

export const dataBase = {
    domain: {
        legend: [
            {color: '#fe7575', text: 'Monomer I', type: 'square'},
            {color: '#65f3f3', text: 'Monomer II', type: 'square'},
            {color: '#00ff02', text: 'N-terminal alpha-helix', type: 'square'},
            {color: '#ff2c7e', text: 'Active site vinicity', type: 'square'},
            {color: '#b64494', text: 'Calcium binding domain', type: 'square'},
            {color: '#0905c5', text: 'Crown Domain', type: 'square'},
            {color: '#023462', text: 'Collagem binding domain', type: 'square'},
            {color: '#f60204', text: 'Mg ion', type: 'circle'},
            {color: '#fffe00', text: 'Zn ion', type: 'circle'},
        ],
        options: {
            'wrmlDomain1': {title: 'Native TNSALP Cartoon', value: 'wrmlDomain1', object: wrmlDomain1},
            'wrmlDomain2': {title: 'Mutant TNSALP Cartoon', value: 'wrmlDomain2', object: wrmlDomain2},
            'wrmlDomain3': {title: 'Native TNSALP Surface', value: 'wrmlDomain3', object: wrmlDomain3},
            'wrmlDomain4': {title: 'Mutant TNSALP Surface', value: 'wrmlDomain4', object: wrmlDomain4},
        }
    },
    interface: {
        legend: [
            {color: '#fe7575', text: 'Monomer I', type: 'square'},
            {color: '#65f3f3', text: 'Monomer II', type: 'square'},
            {color: '#65f3f3', text: 'Interface residues', type: 'square'},
            {color: '#f60204', text: 'Mg ion', type: 'circle'},
            {color: '#fffe00', text: 'Zn ion', type: 'circle'},
        ],
        options: {
            'wrmlInterface1': {title: 'Native TNSALP Cartoon', value: 'wrmlInterface1', object: wrmlInterface1},
            'wrmlInterface2': {title: 'Mutant TNSALP Cartoon', value: 'wrmlInterface2', object: wrmlInterface2},
            'wrmlInterface3': {title: 'Native-Mutant TNSALP Cartoon', value: 'wrmlInterface3', object: wrmlInterface3},
            'wrmlInterface4': {title: 'Native TNSALP Surface', value: 'wrmlInterface4', object: wrmlInterface4},
            'wrmlInterface5': {title: 'Mutant TNSALP Surface', value: 'wrmlInterface5', object: wrmlInterface5},
            'wrmlInterface6': {title: 'Native-Mutant Surface', value: 'wrmlInterface6', object: wrmlInterface6},
        }
    }
}