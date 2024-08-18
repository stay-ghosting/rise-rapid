
import icon_facebook from "../assets/icons/social/facebook.svg";
import icon_instagram from "../assets/icons/social/instagram.svg";
import icon_linkedin from "../assets/icons/social/linkedin.svg";

const socialIcons = [
    {
        image: icon_facebook,
        altText: "facebook icon",
    },
    {
        image: icon_instagram,
        altText: "instagram icon",
    },
    {
        image: icon_linkedin,
        altText: "linkedin icon",
    },
];

function GetInTouchSection() {
  return (
    <section className="bg-bg-dark pt-24 pb-24 flex justify-center space-x-4">
                <div className="border  w-[39rem] border-p bg-bg-card pt-12 px-8 pb-28 m">
                    <h2 className="text-white">
                        Getting in touch is{" "}
                        <span className="text-primary">easy!</span>
                    </h2>
                    <p className="text-white mt-4">
                        Send us a message and a member of our team will be in
                        touch with you within 24h
                    </p>
                    <p className="mt-8 text-white">
                        Contact@RiseRapidWebsiteDesign.com
                    </p>
                    <div className="border-b border-primary mt-1"></div>
                    <div className="flex space-x-6 mt-8">
                        {socialIcons.map(({ image, altText }, index) => (
                            <img
                                src={image}
                                alt={altText}
                                className="w-10 h-10 object-contain"
                                key={index}
                            />
                        ))}
                    </div>
                </div>

                <form action="#" method="post" className="">
                    <div className="flex flex-col justify-between items-center h-full w-[39rem]">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            className="bg-bg-dark-form border border-p focus:border-white text-white outline-none py-2 pl-4 w-full"
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="bg-bg-dark-form border border-p focus:border-white text-white outline-none py-2 pl-4 w-full"
                        />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="123-456-7890"
                            required
                            className="bg-bg-dark-form border border-p focus:border-white text-white outline-none py-2 pl-4 w-full"
                        />
                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            placeholder="Project description"
                            required
                            className="resize-none bg-bg-dark-form border border-p focus:border-white text-white outline-none py-2 pl-4 w-full"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-48 h-10 bg-cta text-white"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </section>
  )
}

export default GetInTouchSection