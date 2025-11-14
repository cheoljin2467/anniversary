import StickerPeel from "../Components/StickerPeel"
import logo from "../assets/target1.png"

export default function testPage() {
  return (
      <div className="absolute inset-0">
        <StickerPeel
            imageSrc={logo}
            width={200}
            rotate={30}
            peelBackHoverPct={0}
            peelBackActivePct={40}
            shadowIntensity={0.1}
            lightingIntensity={0.1}
            initialPosition={{ x: -100, y: 100 }}
        />       
      </div>
  )
}
