import { PiHandshake } from "react-icons/pi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { SlRocket } from "react-icons/sl";


export const Feature = () => {

    return (
        <div className="mt-10 py-3 ">
            <div className=" text-center items-center font-semibold ml-10">
                <h1 className="text-4xl text-center text-gray-700">Features</h1>
            </div>
            <div className=" mt-8 max-w-7xl  ml-12">
                <div className="flex justify-between items-center gap-10">
                    <div className="flex flex-col justify-center items-center space-y-0.8 p-6 px-12 shadow-lg rounded-lg hover:shadow-xl">
                        <SlRocket className="text-red-700" size={40} />
                        <h1 className="text-xl font-semibold mt-3">Instant Setup</h1>
                        <p className="text-lg text-gray-900 mt-2">Get started in under 600</p>
                        <p className="text-lg text-gray-900">seconds - no config, noissle.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-0.8 p-6 px-12 shadow-lg rounded-lg hover:shadow-xl">
                        <AiOutlineSecurityScan className="text-indigo-500" size={45} />
                        <h1 className="text-xl font-semibold mt-3">Security By Design</h1>
                        <p className="text-lg text-gray-900 mt-2">Your data stays protected</p>
                        <p className="text-lg text-gray-900">with enterprise grade security.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-0.8 p-6 px-12 shadow-lg rounded-lg hover:shadow-xl">
                        <PiHandshake className="text-yellow-600" size={45} />
                        <h1 className="text-xl font-semibold mt-3">Team Collaboration</h1>
                        <p className="text-lg text-gray-900 mt-2">Build and ship together with</p>
                        <p className="text-lg text-gray-900">powerfull sharing tools.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}