import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const Navbar = () => {

    return (
        <div className="p-8">
            <div className="flex justify-between items-center">
                <div className="ml-2">
                    <Link to={"/"}><h1 className="text-3xl font-bold"><span className="text-indigo-500">Tech</span>Spark</h1></Link>
                </div>
                <div className="flex justify-between items-center gap-10">
                    <div className="flex justify-end-safe items-center gap-8 p-2 text-xl font-semibold text-gray-600 ">
                        <Link to={"#"}><h3 className="hover:text-gray-700">Home</h3></Link>
                        <Link to={"#"}><h3 className="hover:text-gray-700">Features</h3></Link>
                        <Link to={"#"}><h3 className="hover:text-gray-700">Pricing</h3></Link>
                        <Link to={"#"}><h3 className="hover:text-gray-700">Contact</h3></Link>
                    </div>
                    <div>
                        <Button className="bg-indigo-500 text-lg py-6 hover:bg-indigo-600 cursor-pointer">Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}