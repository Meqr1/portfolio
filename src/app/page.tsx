"use client";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center w-full mt-10 cursor-default dotgrid">
        <div className="dotgrid-content text-2xl purple-fade relative">
          <div className="w-full p-4">
            <div className="w-3/4">
              <span className="text-9xl font-semibold text-primary-600">
                Hello!{" "}
              </span>
              I am{" "}
              <span className="text-7xl font-light hover:text-success-300 transition-all duration-300 delay-100">
                Meqr
              </span>{" "}
              also know as{" "}
              <span className="text-7xl font-light hover:text-success-300 transition-all duration-300 delay-100">
                Ayan Mahajan
              </span>
            </div>
            <div className="flex flex-col mt-10 text-right">
              <span className="text-9xl font-semibold text-primary-600">
                I am
              </span>{" "}
              <p>
                a <span className="text-4xl">Artist</span>
                <br />a <span className="text-6xl">programmer</span>
                <br />
                <br />a <span className="text-5xl">web developer</span>
              </p>
            </div>
            <div className="mt-[250px] text-center flex flex-col gap-10 text-8xl mb-10">
              <Link
                href="/projects"
                className="hover:opacity-90 opacity-60 hover:text-9xl transition-all duration-300 delay-100"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="hover:opacity-90 opacity-60 hover:text-9xl transition-all duration-300 delay-100"
              >
                Contact Me
              </Link>
              <Link
                href="/about"
                className="hover:opacity-90 opacity-60 hover:text-9xl transition-all duration-300 delay-100"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
