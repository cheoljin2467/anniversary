import Ballpit from '../Components/Ballpit'

export default function BallpitPage() {
  return (
      <div className="absolute inset-0">
        <Ballpit
          count={200}
          gravity={0}
          friction={0.9}
          wallBounce={0.95}
          followCursor={false}
          colors={[0xff0000, 0x00ff00, 0x0000ff, 0xffff00]}
          ambientColor={0xffffff}
          ambientIntensity={1.2}
          lightIntensity={250}
          minSize={0.5}
          maxSize={1.5}
          size0={1}
          maxVelocity={0.2}
          maxX={5}
          maxY={5}
          maxZ={2}
        />
      </div>
  )
}