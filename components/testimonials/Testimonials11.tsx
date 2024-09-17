"use client";

import { JSX, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import config from "@/config";

// Define the types for the reference types
// Define the types for refTypes
// Define the types for refTypes
interface RefTypeWithSvg {
  id: "product_hunt" | "twitter";
  ariaLabel: string;
  svg: JSX.Element;
}

interface RefTypeWithoutSvg {
  id: "video" | "other";
}

type RefType = RefTypeWithSvg | RefTypeWithoutSvg;

// Define refTypes object
const refTypes: Record<string, RefType> = {
  productHunt: {
    id: "product_hunt",
    ariaLabel: "See user review on Product Hunt",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.245 26.256"
        className="w-[18px] h-[18px]"
      >
        <path
          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
          fill="#da552f"
        />
        <path
          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
          fill="#fff"
        />
      </svg>
    ),
  },
  twitter: {
    id: "twitter",
    ariaLabel: "See user post on Twitter",
    svg: (
      <svg
        className="w-5 h-5 fill-[#00aCee]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
      </svg>
    ),
  },
  video: { id: "video" },
  other: { id: "other" },
};

// Define the type for the testimonial list items
type Testimonial = {
  username?: string;
  name: string;
  text: string;
  type?: keyof typeof refTypes;
  link?: string;
  img?: string | StaticImageData;
  videoPoster?: string;
  videoSrc?: string;
  videoWidth?: number;
  videoHeight?: number;
  videoType?: "video/ogg" | "video/mp4" | "video/webm";
};

// List of testimonials
const testimonials: Testimonial[] = [
  {
    username: "marclou",
    name: "Marc Lou",
    text: "Really easy to use. The tutorials are really useful and explain how everything works. Hope to ship my next project really fast!",
    type: "twitter",
    link: "https://twitter.com/marc_louvion",
    img: "https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg",
  },
  {
    username: "the_mcnaveen",
    name: "Naveen",
    text: "Setting up everything from the ground up is a really hard, and time-consuming process. What you pay for will save your time for sure.",
    type: "twitter",
    link: "https://twitter.com/the_mcnaveen",
  },
  {
    username: "wahab",
    name: "Wahab Shaikh",
    text: "Easily saves 15+ hrs for me setting up trivial stuff. Now, I can directly focus on shipping features rather than hours of setting up the same technologies from scratch. Feels like a super power! :D",
    type: "productHunt",
    link: "https://www.producthunt.com/products/shipfast-2/reviews?review=667971",
  },
  {
    name: "Sean",
    text: "Just purchased and cloned and *holy shit!* I really like what I'm seeing here!",
    type: "other",
  },
  {
    username: "krishna",
    name: "Krishna Kant",
    text: "Finally a good boilerplate for Nextjs, now I don't have to cry about it comparing with the Laravel ecosystem.",
    type: "productHunt",
    link: "https://www.producthunt.com/posts/shipfast-2?comment=2707061",
  },
  {
    username: "imgyf",
    name: "Yifan Goh",
    text: "It's a game changer 🚀 Comes with an easy-to-follow tutorial, and saves you a ton of time. What's not to love?",
    type: "twitter",
    link: "https://twitter.com/imgyf/status/1697549891080532236?s=20",
  },
  {
    name: "Yazdun",
    text: "Yo Marc, I got the boilerplate, it's fantastic man you just saved me 10 hours on each project",
    type: "other",
  },
  {
    name: "Marc Lou",
    text: "The tool is exactly what I didn't even know I needed.",
    videoPoster: "https://d1wkquwg5s1b04.cloudfront.net/demo/marcPoster.jpg",
    videoSrc: "https://d1wkquwg5s1b04.cloudfront.net/demo/marcVideo.mp4",
    videoHeight: 250,
    videoWidth: 500,
    type: "video",
  },
  {
    username: "zawwadx",
    name: "Zawwad Ul Sami",
    text: "It's an amazing minimalist, lightweight boilerplate with well-organized code. It has almost all the core features you would want in a SaaS boilerplate. As a new team last year it actually took us months to build a similar set of features at a stable level.",
    type: "twitter",
  },
  {
    username: "dan",
    name: "Dan Mindru",
    text: "Probably one of the most powerful things you can 'npm install' that I've seen",
    type: "productHunt",
    link: "https://www.producthunt.com/posts/shipfast-2?comment=2706763",
  },
  {
    username: "VicPivots",
    name: "Victor Abeledo",
    text: "Marc, I got your boilerplate and having the payments setup with Stripe + user auth is a blessing. This will save me like a week of work for each new side project I spin up. I appreciate that it is well documented, as well. 100% worth it 🚀🚀🚀",
    type: "twitter",
    link: "https://twitter.com/VicPivots/status/1697352442986250413?s=20",
  },
];

function hasSvg(refType: RefType): refType is RefTypeWithSvg {
  return "svg" in refType;
}
// Testimonial component
const Testimonial = ({ i }: { i: number }) => {
  const testimonial = testimonials[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative h-full p-6 bg-base-100 rounded-lg">
        <blockquote className="relative">
          <p className="text-sm text-base-content/80">{testimonial.text}</p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
          {testimonial.img && (
            <div className="avatar w-12 h-12">
              <Image
                className="rounded-full"
                src={testimonial.img}
                alt={`Profile image of ${testimonial.username}`}
                width={48}
                height={48}
              />
            </div>
          )}
          <div>
            {testimonial.username && (
              <a
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content font-bold"
              >
                {testimonial.username}
              </a>
            )}
            <p className="text-sm text-base-content/50">{testimonial.name}</p>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

// Video testimonial component
const VideoTestimonial = ({ i }: { i: number }) => {
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (vidRef.current && vidRef.current.readyState !== 0) {
      setIsLoading(false);
    }
  }, [vidRef.current?.readyState]);

  const handlePlayVideo = () => {
    if (isPlaying) {
      vidRef.current?.pause();
      setIsPlaying(false);
    } else {
      vidRef.current?.play();
      setIsPlaying(true);

      if (vidRef.current && vidRef.current.readyState === 0) setIsLoading(true);
    }
  };

  const testimonial = testimonials[i];

  if (!testimonial) return null;

  return (
    <li
      key={i}
      className="break-inside-avoid max-md:flex justify-center bg-base-100 rounded-lg overflow-hidden flex flex-col"
    >
      <div className="relative w-full">
        {isLoading && (
          <span className="z-40 !h-24 !w-24 !bg-gray-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loading loading-ring"></span>
        )}
        <video
          className="w-full"
          ref={vidRef}
          poster={testimonial.videoPoster}
          preload="metadata"
          playsInline
          width={testimonial.videoWidth}
          height={testimonial.videoHeight}
          onLoadedData={() => {
            setIsLoading(false);
          }}
        >
          <source
            src={testimonial.videoSrc}
            type={testimonial.videoType || "video/mp4"}
          />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div className="absolute bottom-0 -inset-x-4 bg-gray-900/50 blur-lg h-24 translate-y-1/4 animate-opacity"></div>
        )}

        <div className="absolute w-full bottom-0 z-20">
          <div className="flex justify-between items-end p-4">
            <button
              className="group cursor-pointer"
              type="button"
              title="Play video"
              aria-label="Play video"
              onClick={handlePlayVideo}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 fill-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 fill-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {!isPlaying && (
              <div className="animate-opacity text-right">
                <p className="text-gray-50 font-medium drop-shadow">
                  {testimonial.name}
                </p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-accent drop-shadow"
                      key={i}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-accent text-accent-content text-base leading-tight font-medium p-4 select-none">
        <p>&quot;{testimonial.text}&quot;</p>
      </div>
    </li>
  );
};

// Export the component
export default function TestimonialList() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {testimonials.map((_, i) => (
        <Testimonial key={i} i={i} />
      ))}
    </ul>
  );
}
