import { Button } from "antd"

const Hero = () => {
  return (
    <section className="bg-[url('/bgimage.png')] overflow-hidden  bg-cover bg-no-repeat h-[75vh] py-7 pl-7  rounded-[50px] relative bg-linear-to-br from-[#0000002B] to-text-primary flex justify-between items-center">
        <div className="text-white flex flex-col w-[55%]">
            <span className="text-[30px] text-white uppercase">
            Sale up to 20% off
            </span>
            <h3 className="text-[4rem] font-bold">
            Apple Watch Ultra 2
            </h3>
            <p className="mb-5 text-[25px] font-light leading-[100%]">The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP.</p>
            <div className="flex gap-4 items-center">
            <Button className="text-[22px]! rounded-[34px]! text-white! text-center! flex! items-center! justify-center! border-transparent! bg-[#D75300]!">Shop Now</Button>
            <Button className="text-[22px]! rounded-[34px]! text-text-primary! text-center! flex! items-center! justify-center! border-transparent! bg-white!">Learn More</Button>
            </div>
        </div>
        <div className="flex w-[52%] h-full">
            <img 
                src="/watch.png" 
                className="w-full scale-115" 
                alt="Watch Front" 
            />
            
            <img 
                src="/watch2.png" 
                className="w-full scale-110" 
                alt="Watch Side" 
            />
        </div>
    </section>
  )
}

export default Hero