import wrmlDomain1 from './domain/DomainNative.wrl';
import wrmlDomain2 from './domain/DomainMutante.wrl';
import wrmlDomain3 from './domain/DomainNativeSurface.wrl';
import wrmlDomain4 from './domain/DomainMutanteSurface.wrl';

import wrmlInterface1 from './interface/NativeInterface.wrl';
import wrmlInterface2 from './interface/MutanteInterface.wrl';
import wrmlInterface3 from './interface/NativeMutInterface.wrl';
import wrmlInterface4 from './interface/NativeInterfaceSurface.wrl';
import wrmlInterface5 from './interface/MutanteInterfaceSurface.wrl';
import wrmlInterface6 from './interface/NativeMutInterfaceSurface.wrl';

export const dataBase = {
    domain: {
        description: `Native and mutant 3D models of the TNSALP homodimer. 
            The monomers I and II and domain and functional sites were colored according with legend. 
            Cartoon and Surface representation are available.`,
        legend: [
            {color: '#cf7c7c', text: 'Monomer I', type: 'square'},
            {color: '#29a67c', text: 'Monomer II', type: 'square'},
            {color: '#127912', text: 'N-terminal alpha-helix', type: 'square'},
            {color: '#f7408c', text: 'Active site vinicity', type: 'square'},
            {color: '#a862b4', text: 'Calcium binding domain', type: 'square'},
            {color: '#3074cb', text: 'Crown Domain', type: 'square'},
            {color: '#13136d', text: 'Collagem binding domain', type: 'square'},
            {color: '#ffefef', text: 'Zn and Mg ions', type: 'circle'},
        ],
        options: {
            'wrmlDomain1': {title: 'Native TNSALP Cartoon', value: 'wrmlDomain1', object: wrmlDomain1},
            'wrmlDomain2': {title: 'Mutant TNSALP Cartoon', value: 'wrmlDomain2', object: wrmlDomain2},
            'wrmlDomain3': {title: 'Native TNSALP Surface', value: 'wrmlDomain3', object: wrmlDomain3},
            'wrmlDomain4': {title: 'Mutant TNSALP Surface', value: 'wrmlDomain4', object: wrmlDomain4},
        }
    },
    interface: {
        description: `Native and mutant 3D models of the TNSALP dimer structure. 
        The monomers I and II, and predicting protein interface residues were colored according with legend. 
        Cartoon and Surface representation are available.  `,
        legend: [
            {color: '#cf7c7c', text: 'Monomer I', type: 'square'},
            {color: '#29a67c', text: 'Monomer II', type: 'square'},
            {color: '#841919', text: 'Interface residues', type: 'square'},            
            {color: '#ffefef', text: 'Zn and Mg ions', type: 'circle'},
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