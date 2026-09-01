import { Float, Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FloatingObjects() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!group.current) return;

        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            state.pointer.x * 0.08,
            0.03
        );

        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            -state.pointer.y * 0.05,
            0.03
        );
    });

    return (
        <>
            <group ref={group}>
                {/* Left floating ring */}
                <Float
                    speed={1.5}
                    rotationIntensity={1}
                    floatIntensity={1}
                >
                    <mesh position={[-3.2, 1.8, -1.5]} rotation={[0.7, 0.2, 0]}>
                        <torusGeometry args={[0.28, 0.035, 16, 48]} />
                        <meshStandardMaterial
                            color="#48e8d0"
                            emissive="#48e8d0"
                            emissiveIntensity={2}
                            metalness={0.7}
                            roughness={0.25}
                        />
                    </mesh>
                </Float>

                {/* Right geometric object */}
                <Float
                    speed={1.2}
                    rotationIntensity={1.5}
                    floatIntensity={0.8}
                >
                    <mesh position={[2.5, 1.3, -1]}>
                        <icosahedronGeometry args={[0.16, 1]} />
                        <meshStandardMaterial
                            color="#a66cff"
                            emissive="#8b5cf6"
                            emissiveIntensity={2}
                            metalness={0.6}
                            roughness={0.25}
                        />
                    </mesh>
                </Float>

                {/* Small cyan sphere */}
                <Float
                    speed={1.8}
                    rotationIntensity={0.5}
                    floatIntensity={1.2}
                >
                    <mesh position={[-2.7, -1.2, -0.5]}>
                        <sphereGeometry args={[0.09, 24, 24]} />
                        <meshStandardMaterial
                            color="#5eead4"
                            emissive="#2dd4bf"
                            emissiveIntensity={3}
                        />
                    </mesh>
                </Float>

                {/* Small purple sphere */}
                <Float
                    speed={1.5}
                    rotationIntensity={0.5}
                    floatIntensity={1}
                >
                    <mesh position={[2.8, -0.7, -0.6]}>
                        <sphereGeometry args={[0.11, 24, 24]} />
                        <meshStandardMaterial
                            color="#c084fc"
                            emissive="#a855f7"
                            emissiveIntensity={3}
                        />
                    </mesh>
                </Float>
            </group>

            {/* Background particles */}
            <Sparkles
                count={40}
                scale={[7, 5, 4]}
                size={1.2}
                speed={0.25}
                opacity={0.35}
            />
        </>
    );
}

export default FloatingObjects;