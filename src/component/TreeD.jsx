import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Earth from './Earth'

function TreeD() {
    return (
        <Canvas>
            <ambientLight intensity={3} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
                <Earth />
            </Suspense>
        </Canvas>
    )
}

export default TreeD