import { useState } from "react";
import Navbar from "../sections/Navbar";
import ResponsiveSection from "../sections/ResponsiveSection";
import Footer from "../sections/Footer";

const blogPosts: { title: string; image: string }[] = [
  {
    title: "Do I Need a Website?",
    image: "https://picsum.photos/1080/720?random=1",
  },
  {
    title: "Your Gateway to Success",
    image: "https://picsum.photos/1080/720?random=2",
  },
  {
    title: "How Colors Boost Brand Appeal",
    image: "https://picsum.photos/1080/720?random=3",
  },
  {
    title: "Why Your Business Needs a Website",
    image: "https://picsum.photos/1080/720?random=4",
  },
  {
    title: "Color Theory Secrets for Better Sales",
    image: "https://picsum.photos/1080/720?random=5",
  },
  {
    title: "Why Your Website is Key to Sales",
    image: "https://picsum.photos/1080/720?random=6",
  },
  {
    title: "How Color Choices Drive Conversions",
    image: "https://picsum.photos/1080/720?random=7",
  },
  {
    title: "Is Your Business Ready for a Website?",
    image: "https://picsum.photos/1080/720?random=8",
  },
  {
    title: "Color Psychology for More Engagement",
    image: "https://picsum.photos/1080/720?random=11",
  },
  // {
  //   title: "The Importance of a Modern Website",
  //   image: "https://picsum.photos/1080/720?random=10"
  // }
];

const Blog: React.FC = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className="grow">
        <ResponsiveSection>
          <h1 className='text-center'>Blogs Coming Soon</h1>
          {/* <h2 className="text-center">Blogs & Case Studies</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {blogPosts.slice(0, 3).map(({ title, image }, index) => (
            <div style={{ backgroundImage: `url(${image})` }} className={` bg-cover min-h-[60rem] sm:min-h-[15rem] bg-center bg-gray-600 border border-black p-4`} key={index}>
              <p className='text-white font-bold'>{title}</p>
            </div>
          ))}
          {viewMore &&
            blogPosts.slice(3).map(({ title, image }, index) => (
              <div style={{ backgroundImage: `url(${image})` }} className={` bg-cover min-h-[60rem] sm:min-h-[15rem] bg-center bg-gray-600 border border-black p-4`} key={index}>
                <p className='text-white font-bold'>{title}</p>
              </div>
            ))}
        </div>
        <div
          style={{ backgroundImage: `url(https://picsum.photos/1080/720?random=10)` }}
          onClick={() => {
            setViewMore((prev) => !prev);
          }}
          className='bg-gray-600 min-h-[15rem] border flex items-center justify-center border-black p-4 w-full mt-4 mb-[10rem]'
        >
          <p className='text-white font-bold text-center'>VIEW MORE</p>
        </div> */}
        </ResponsiveSection>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
