import { Button } from "@/components/ui/button"


export const Hero = () => {

    return (
        <div className="py-3">
            <div className="container mx-auto flex justify-between items-center mt-4 p-5">
                <div className="flex flex-col justify-start items-start py-4 gap-2">
                    <div className="max-w-xl p-4 space-y-2">
                        <h1 className="lg:text-7xl text-5xl font-bold text-gray-800">Build Faster.</h1>
                        <h1 className="lg:text-7xl text-5xl font-bold text-gray-800">Smarter.</h1>
                        <h1 className="lg:text-7xl text-5xl font-bold text-gray-800">Together.</h1>
                    </div>
                    <p className="text-xl text-gray-500 font-serif max-w-xl ml-7">
                        TechSpark is the ultimate platform to streamline your development workflows, from idea to production — with ease and efficiency.
                    </p>
                    <div className="max-w-xl ml-7 mt-8 flex justify-center items-center gap-6">
                        <Button className="p-6 cursor-pointer text-xl bg-indigo-500 hover:bg-indigo-600">Try Free</Button>
                        <Button className="p-6 cursor-pointer text-xl bg-indigo-500 hover:bg-indigo-600">Learn More</Button>
                    </div>
                </div>
                <div>
                    <span />
                    <div className="flex justify-center items-center min-h-[300px] min-w-[300px]">
                        <img src="./image.png" alt="laptop image" className="h-auto w-140 p-4" />
                    </div>
                </div>

            </div>
        </div>
    )
}