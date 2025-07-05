

export const Footer = () => {

    return (
        <div className="mt-10 py-4 bg-indigo-600 ml-10 flex justify-between items-center px-18 h-42 mb-8 rounded-b-4xl">
            <div className="flex flex-col justify-center items-start gap-2 ">
                <h1 className="text-xl text-white font-bold mb-4">About</h1>
                <p className="text-lg font-base text-gray-300 cursor-pointer hover:text-gray-400">Product</p>
                <p className="text-lg font-base text-gray-300 cursor-pointer hover:text-gray-400 ">Company</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 ">
                <h1 className="text-xl text-white font-bold mb-4">Resources</h1>
                <p className="text-lg font-base text-gray-300 cursor-pointer hover:text-gray-400">Blogs</p>
                <p className="text-lg font-base text-gray-300 cursor-pointer hover:text-gray-400 ">Company</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 ">
                <h1 className="text-xl text-white font-bold mb-4">Company</h1>
                <p className="text-lg font-base text-gray-300 cursor-pointer hover:text-gray-400">Address</p>
                <p className="text-lg font-base text-gray-300 cursor-pointer hover:text-gray-400 ">Address</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 ">
                <h1 className="text-xl text-white font-bold mb-4">Social</h1>
                <p className="text-lg font-base text-gray-300 cursor-pointer hover:text-gray-400">Linkedin</p>
                <p className="text-lg font-base text-gray-300  cursor-pointer hover:text-gray-400">Twitter (X)</p>
            </div>
        </div>
    )
}