

export const Testimonial = () => {

    return (
        <div className="mt-10 py-3">
            <div className="flex justify-around items-center gap-4 ml-10">
                <div className="shadow-sm flex flex-col justify-around items-center p-8 max-w-7xl">
                    <p className="py-4 w-1/2 text-center items-center text-xl font-serif">" TechSpark boosted our productivity by 50%! we can't imagine working without it. "</p>
                    <p className="text-end items-center ml-42 text-gray-700">Name, CTO @ TechSpark</p>
                </div>
                <div className="shadow-sm flex flex-col justify-around items-center p-8 max-w-7xl">
                    <p className="py-4 w-1/2 text-center items-center text-xl font-serif">" A game changer for fast-moving teams. Simple, Powerful, and elegant. "</p>
                    <p className="text-end items-center ml-42 text-gray-700">Name, PM @ TechSpark</p>
                </div>
            </div>
        </div>
    )
}