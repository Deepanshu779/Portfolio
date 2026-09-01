import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Avatar from "./Avatar";
import FloatingObjects from "./FloatingObjects";

function HeroScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{
                    position: [0, 0, 6.5],
                    fov: 45,
                }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                }}
            >
                {/* Soft base light */}
                <ambientLight intensity={1.1} />

                {/* Cyan key light */}
                <pointLight
                    position={[3.5, 2.5, 4]}
                    intensity={32}
                    color="#45ffe1"
                    distance={8}
                />

                {/* Purple rim */}
                <pointLight
                    position={[-3.5, 1.5, 2]}
                    intensity={24}
                    color="#9b5cff"
                    distance={7}
                />

                {/* Warm face light */}
                <pointLight
                    position={[0, 2, 5]}
                    intensity={16}
                    color="#ffd0bd"
                    distance={8}
                />

                {/* Lower cyan fill */}
                <pointLight
                    position={[1, -3, 2]}
                    intensity={10}
                    color="#24d9c5"
                    distance={6}
                />

                <Avatar />

                <FloatingObjects />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}

export default HeroScene;