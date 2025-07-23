export const Testimonial = () => {
  return (
    <div className="mt-10 py-3 p-4 md:py-4 md:p-1">
      <div className="flex flex-col justify-center items-center gap-4 m-6 md:flex md:flex-row">
        <div className="shadow-sm flex flex-col justify-around items-center p-8 max-w-7xl">
          <p className="py-4 w-fit md:w-1/2 text-center items-center text-2xl md:text-xl font-serif">
            " TechSpark boosted our productivity by 50%! we can't imagine
            working without it. "
          </p>
          <p className="text-end text-xs md:text-md items-center ml-42 text-gray-700">
            Name, CTO @ TechSpark
          </p>
        </div>
        <div className="shadow-sm flex flex-col justify-around items-center p-8 max-w-7xl">
          <p className="py-4 w-fit md:w-1/2 text-center items-center text-2xl md:text-xl font-serif">
            " A game changer for fast-moving teams. Simple, Powerful, and
            elegant. "
          </p>
          <p className="text-end text-xs md:text-md items-center ml-42 text-gray-700">
            Name, PM @ TechSpark
          </p>
        </div>
      </div>
    </div>
  );
};
