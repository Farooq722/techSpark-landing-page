import { Feature } from "./pages/FeatureSec"
import { Hero } from "./pages/Hero"
import { Navbar } from "./pages/Nav"
import { Testimonial } from "./pages/Testimonial"


export const Home = () => {

    return (
        <div className=" max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <Feature />
            <Testimonial />
        </div>
    )
}