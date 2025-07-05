import { Feature } from "./pages/FeatureSec"
import { Footer } from "./pages/Footer"
import { Hero } from "./pages/Hero"
import { Navbar } from "./pages/Nav"
import { SecondLastPage } from "./pages/SecondLastPage"
import { Testimonial } from "./pages/Testimonial"


export const Home = () => {

    return (
        <div className=" max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <Feature />
            <Testimonial />
            <SecondLastPage />
            <Footer />
        </div>
    )
}