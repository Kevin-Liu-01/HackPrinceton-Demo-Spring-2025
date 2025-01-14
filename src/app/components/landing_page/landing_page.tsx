"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Image,
  Environment,
  ScrollControls,
  useScroll,
  useTexture,
  Text,
} from "@react-three/drei";
import { easing } from "maath";
import "../../utils/util";

const SiteURLS = [
  { name: "Home", color: "bg-red-100", link: "/images/promo1.jpg" },
  { name: "About", color: "bg-red-200", link: "/images/promo2.jpg" },
  { name: "Tracks", color: "bg-red-300", link: "/images/promo3.jpg" },
  { name: "FAQ", color: "bg-[#f78f8f]", link: "/images/promo4.jpg" },
  { name: "Sponsors", color: "bg-red-400", link: "/images/promo5.jpg" },
  { name: "Resources", color: "bg-red-500", link: "/images/promo6.jpg" },
  { name: "Contact", color: "bg-red-600", link: "/images/promo7.jpg" },
  { name: "Register", color: "bg-red-700", link: "/images/promo8.webp" },
];

const LandingPage = () => {
  return (
    <main
      id="home"
      className="scroll-smooth h-screen w-full gap-8 items-center sm:items-start text-white"
    >
      <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
        <fog attach="fog" args={["#a79", 8.5, 12]} />
        <ScrollControls pages={4}>
          <Rig rotation={[0, 0, 0.15]}>
            <Carousel />
          </Rig>
          <Banner position={[0, -0.15, 0]} />
        </ScrollControls>
        <Environment preset="dawn" background blur={0.5} />
      </Canvas>
    </main>
  );
};

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
    state.events.update(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    ); // Move camera
    state.camera.lookAt(0, 0, 0); // Look at center
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4, count = 8 }) {
  return SiteURLS.map((site, i) => (
    <Card
      key={site.name + i}
      url={site.link}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      name={site.name}
      color={site.color}
    />
  ));
}

function Card({ url, name, ...props }) {
  const ref = useRef();
  const textRef = useRef();
  const [hovered, hover] = useState(false);
  const { camera } = useThree(); // Access the camera to orient the text

  const pointerOver = (e) => (e.stopPropagation(), hover(true));

  const pointerOut = () => hover(false);
  useFrame(() => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position); // Make the name text face the camera
    }
  });

  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });
  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      {hovered && (
        <Text
          ref={textRef}
          position={[0, 0.6, 0]} // Position above the card
          fontSize={0.1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      )}

      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

function Banner(props) {
  const ref = useRef();
  const texture = useTexture("/images/logos/hp-combinedlogo.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.material.time.value += Math.abs(scroll.delta) * 4;
    ref.current.material.map.offset.x += delta / 2;
  });
  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[25, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}

export default LandingPage;
