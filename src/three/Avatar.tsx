import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Avatar() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!group.current) return;

        const time = state.clock.elapsedTime;

        // Mouse-following head movement
        const targetY = state.pointer.x * 0.18;
        const targetX = -state.pointer.y * 0.08;

        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            targetY,
            0.045
        );

        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            targetX,
            0.045
        );

        // Subtle breathing / idle movement
        const breathing = Math.sin(time * 1.4) * 0.015;

        group.current.position.y = -0.95 + breathing;
    });

    return (
        <Float
            speed={1.1}
            rotationIntensity={0.06}
            floatIntensity={0.18}
        >
            <group
                ref={group}
                position={[0.45, -0.95, 0]}
                scale={0.85}
            >
                {/* ================= BODY ================= */}

                <mesh position={[0, -1.45, 0]}>
                    <sphereGeometry args={[1.38, 64, 40]} />
                    <meshStandardMaterial
                        color="#151922"
                        roughness={0.72}
                        metalness={0.05}
                    />
                </mesh>

                {/* ================= NECK ================= */}

                <mesh position={[0, -0.45, 0]}>
                    <cylinderGeometry args={[0.42, 0.5, 0.65, 40]} />
                    <meshStandardMaterial
                        color="#8d4d3d"
                        roughness={0.62}
                    />
                </mesh>

                {/* ================= HEAD ================= */}

                <mesh position={[0, 0.42, 0]}>
                    <sphereGeometry args={[1.25, 64, 48]} />
                    <meshStandardMaterial
                        color="#a9604c"
                        roughness={0.58}
                        metalness={0.02}
                    />
                </mesh>

                {/* ================= EARS ================= */}

                <mesh position={[-1.18, 0.38, 0]}>
                    <sphereGeometry args={[0.35, 40, 30]} />
                    <meshStandardMaterial
                        color="#95513f"
                        roughness={0.62}
                    />
                </mesh>

                <mesh position={[1.18, 0.38, 0]}>
                    <sphereGeometry args={[0.35, 40, 30]} />
                    <meshStandardMaterial
                        color="#95513f"
                        roughness={0.62}
                    />
                </mesh>

                {/* ================= EYES ================= */}

                <group position={[-0.43, 0.62, 1.08]}>
                    <mesh scale={[1, 1.15, 0.8]}>
                        <sphereGeometry args={[0.29, 40, 32]} />
                        <meshStandardMaterial color="#f5f5f5" />
                    </mesh>

                    <mesh position={[0, -0.01, 0.25]} scale={0.55}>
                        <sphereGeometry args={[0.29, 40, 32]} />
                        <meshStandardMaterial
                            color="#21174f"
                            roughness={0.2}
                            metalness={0.15}
                        />
                    </mesh>
                </group>

                <group position={[0.43, 0.62, 1.08]}>
                    <mesh scale={[1, 1.15, 0.8]}>
                        <sphereGeometry args={[0.29, 40, 32]} />
                        <meshStandardMaterial color="#f5f5f5" />
                    </mesh>

                    <mesh position={[0, -0.01, 0.25]} scale={0.55}>
                        <sphereGeometry args={[0.29, 40, 32]} />
                        <meshStandardMaterial
                            color="#21174f"
                            roughness={0.2}
                            metalness={0.15}
                        />
                    </mesh>
                </group>

                {/* ================= EYEBROWS ================= */}

                <mesh
                    position={[-0.43, 1.03, 1.08]}
                    rotation={[0, 0, -0.04]}
                    scale={[0.38, 0.08, 0.08]}
                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        color="#181419"
                        roughness={0.8}
                    />
                </mesh>

                <mesh
                    position={[0.43, 1.03, 1.08]}
                    rotation={[0, 0, 0.04]}
                    scale={[0.38, 0.08, 0.08]}
                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        color="#181419"
                        roughness={0.8}
                    />
                </mesh>

                {/* ================= NOSE ================= */}

                <mesh position={[0, 0.23, 1.22]}>
                    <sphereGeometry args={[0.29, 40, 32]} />
                    <meshStandardMaterial
                        color="#8d493a"
                        roughness={0.62}
                    />
                </mesh>

                {/* ================= SMILE ================= */}

                <mesh
                    position={[0, -0.25, 1.13]}
                    scale={[0.68, 0.27, 0.12]}
                >
                    <sphereGeometry args={[0.5, 40, 24]} />
                    <meshStandardMaterial
                        color="#f5f5f2"
                        roughness={0.4}
                    />
                </mesh>

                {/* ================= HAIR ================= */}

                <mesh position={[0, 1.27, 0]}>
                    <sphereGeometry args={[1.08, 56, 32]} />
                    <meshStandardMaterial
                        color="#151216"
                        roughness={0.82}
                    />
                </mesh>

                {/* ================= CAP ================= */}

                <mesh position={[0, 1.57, 0]}>
                    <sphereGeometry
                        args={[
                            1.25,
                            64,
                            32,
                            0,
                            Math.PI * 2,
                            0,
                            Math.PI * 0.53,
                        ]}
                    />
                    <meshStandardMaterial
                        color="#111319"
                        roughness={0.38}
                        metalness={0.08}
                    />
                </mesh>

                {/* Cap visor */}
                <mesh
                    position={[0, 1.48, 0.73]}
                    rotation={[-0.12, 0, 0]}
                    scale={[1.15, 0.16, 0.62]}
                >
                    <sphereGeometry args={[0.65, 40, 20]} />
                    <meshStandardMaterial
                        color="#08090c"
                        roughness={0.3}
                        metalness={0.15}
                    />
                </mesh>
            </group>
        </Float>
    );
}

export default Avatar;