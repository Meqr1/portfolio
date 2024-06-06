import { Card, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mt-10 cursor-default dotgrid">
        <div className="dotgrid-content text-2xl purple-fade relative">
          <div className="w-full p-4">
            <div className="w-3/4">
              <span className="text-9xl font-semibold text-primary-600">
                Projects
              </span>
            </div>
            <div className="mt-[250px] text-center flex flex-col gap-10 text-8xl">
              <div>
                <a href="https://linkify-44026.web.app">
                  <Card isFooterBlurred className="scale-100 hover:scale-125">
                    <Image
                      alt="NuraNote"
                      className="ovject-cover"
                      height={500}
                      width={500}
                      src="/NuraNote.png"
                    />
                    <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny text-white/80">NuraNote</p>
                    </CardFooter>
                  </Card>
                </a>
                <Card
                  isFooterBlurred
                  className="scale-100 hover:scale-125 mt-20"
                >
                  <Image
                    alt="NuraNote"
                    className="ovject-cover"
                    height={500}
                    width={500}
                    src="/inzota.png"
                  />
                  <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">inzota</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
