"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);

    window.addEventListener("scroll", function (e) {
      const scrollY = window.scrollY;

      if (scrollY > 0 && !scrolled) {
        setScrolled(true);
      }
    });
  }, [scrolled]);

  return (
    <>
      <div
        className={`transition-all mt-10 duration-1000 h-[160vh] flex flex-col items-center w-full overflow-hidden ${loading ? `translate-y-10 opacity-50` : `translate-y-0 opacity-100`}`}
      >
        <div className="w-3/5 text-2xl text-center">
          <span className="text-3xl font-semibold">Hello</span>, my name is{" "}
          <span className="text-secondary font-semibold text-3xl">Meqr</span>,{" "}
          <div className="text-5xl">and i am a </div>
        </div>
        {scrolled && (
          <>
            <div className="flex flex-col items-center skew-y-12">
              <div className="overflow-x-hidden marquee flex gap-5">
                <div className="mt-10 text-9xl text-nowrap overflow-hidden">
                  Front End Developer, backend Developer,
                </div>
                <div className="mt-10 text-9xl text-nowrap overflow-hidden">
                  Front End Developer, backend Developer,
                </div>
                <div className="mt-10 text-9xl text-nowrap overflow-hidden ">
                  Front End Developer, backend Developer,
                </div>
              </div>
              <div className="relative overflow-x-hidden marquee flex gap-5">
                <div className="mt-10 text-9xl text-nowrap overflow-hidden">
                  3d Artist, pixel artist, traditional artist,
                </div>
                <div className="mt-10 text-9xl text-nowrap overflow-hidden">
                  3d Artist, pixel artist, traditional artist,
                </div>
                <div className="mt-10 text-9xl text-nowrap overflow-hidden">
                  3d Artist, pixel artist, traditional artist,
                </div>
              </div>
            </div>
            <div className="dotgrid h-[140vh] mt-[100px] w-full">
              <div className="dotgrid-content m-10 w-4/5 flex flex-col">
                <p>
                  <span className="text-4xl text-primary-700">Work.. </span>
                  Meqr also known as{" "}
                  <span className="text-2xl">MQuery or Ayan Mahajan</span> is a
                  artist and an indie full-stack developer based in{" "}
                  <span className="text-xl">India</span> with a interest in{" "}
                  <span className="font-extralight text-2xl">
                    building things that solve real-life problems with code.
                  </span>
                  and a history for{" "}
                  <span className="text-xl">
                    understanding his clients well
                  </span>
                  . from planning and designing{" "}
                  <span className="text-lg font-semibold">
                    all the was to implementing.
                  </span>{" "}
                  Outside of technology,{" "}
                  <span className="text-2xl">
                    He like to draw, play games and handout.
                  </span>{" "}
                  Currently, he is working on his own product called{" "}
                  <Link
                    href="https://linkify-44026.web.app/"
                    className="text-success font-light"
                  >
                    NuraNote
                  </Link>
                  . He publishes content for marketing his products and his
                  YouTube challed called{" "}
                  <Link
                    href="https://www.youtube.com/channel/UC8-ns1F3px56_LVj44athGw"
                    className="text-success font-light"
                  >
                    &quot;M Query&quot;
                  </Link>
                </p>
                <p className="mt-10">
                  <span className="text-4xl text-primary-700">I ♥.. </span>
                  <span className="text-3xl">Art</span>,{" "}
                  <span className="text-2xl">Music</span>,{" "}
                  <span className="text-2xl">Drawing</span>,{" "}
                  <span className="text-xl">Pixel Art</span>,{" "}
                  <span className="text-2xl">Photography</span>,
                  <span className="text-xl">Machine Learning</span>,{" "}
                  <span className="text-2xl">3d Art</span>,{" "}
                  <span className="text-3xl">Programming</span>,{" "}
                  <span className="text-2xl">Web Development</span>.
                </p>

                <p className="mt-20">
                  <span className="text-4xl text-primary-700">
                    On the web...
                  </span>
                </p>
                <Link href="https://github.com/Meqr1">Github - Meqr1</Link>
                <Link href="https://x.com/Ayan_MQuery">
                  Twitter/X - Ayan_MQuery
                </Link>
                <Link href="https://www.youtube.com/channel/UC8-ns1F3px56_LVj44athGw">
                  Youtube - M Query
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
