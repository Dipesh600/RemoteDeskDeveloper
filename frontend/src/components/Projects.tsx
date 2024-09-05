import { PinContainer } from "../ui/pin";

export function AnimatedPinDemo() {
  return (
    <div className="flex flex-row mt-24 justify-center">
      <div className="h-[40rem] w-auto flex items-center justify-center">
        <PinContainer title="School Management" href="">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
              SMS
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">A school management system</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="your-video-url.mp4"
                autoPlay
                muted
                loop
              />
            </div>
          </div>
        </PinContainer>
      </div>

      <div className="h-[40rem] w-auto flex items-center justify-center ml-24">
        <PinContainer title="School Management" href="">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
              SMS
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">A school management system</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="your-video-url.mp4"
                autoPlay
                muted
                loop
              />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
