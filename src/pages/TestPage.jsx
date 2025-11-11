import Stepper, { Step } from "../Components/Stepper";

export default function testPage() {
  return (
      <div className="absolute inset-0">
        <Stepper
            initialStep={1}
            onStepChange={(step) => console.log("현재 스텝:", step)}
            onFinalStepCompleted={() => console.log("모든 스텝 완료!")}
            backButtonText="이전"
            nextButtonText="다음"
            // 🔹 Stepper 전체 배경 유리 느낌
            stepCircleContainerClassName="px-6 py-3 text-white font-medium rounded-xl 
                        bg-white/10 backdrop-blur-lg 
                        transition-all duration-500 "
                        

            >
            <Step>
                <h2>Welcome to the React Bits stepper!</h2>
                <p>Check out the next step!</p>
            </Step>
            <Step>
                <h2>Step 2</h2>
                <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
                <p>Custom step content!</p>
            </Step>
            <Step>
                <h2>How about an input?</h2>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
            </Step>
            <Step>
                <h2>Final Step</h2>
                <p>You made it!</p>
            </Step>
        </Stepper>
      </div>
  )
}
