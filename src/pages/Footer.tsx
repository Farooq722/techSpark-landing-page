export const Footer = () => {
  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-16">
      <div className="bg-indigo-600 rounded-b-3xl py-8 px-4 md:px-10 flex flex-col md:flex-row justify-between gap-8">
        {[
          {
            title: "About",
            links: ["Product", "Company"],
          },
          {
            title: "Resources",
            links: ["Blogs", "Company"],
          },
          {
            title: "Company",
            links: ["Address", "Address"],
          },
          {
            title: "Social",
            links: ["Linkedin", "Twitter (X)"],
          },
        ].map((section, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h1 className="text-xl text-white font-bold mb-2">{section.title}</h1>
            {section.links.map((link, idx) => (
              <p
                key={idx}
                className="text-base text-gray-300 hover:text-gray-400 cursor-pointer"
              >
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
