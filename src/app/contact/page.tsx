import { Button } from "@nextui-org/button";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mt-10 cursor-default dotgrid">
        <div className="dotgrid-content text-2xl purple-fade relative">
          <div className="w-full p-4">
            <span className="text-9xl font-semibold text-primary-600">
              Contact Me
            </span>
          </div>
          <div className="mt-20 p-4">
            <form
              action="https://formspree.io/f/xnqekwzy"
              method="POST"
              className="flex flex-col gap-3 "
            >
              <label>
                <span className="text-sm">email:</span>
                <br />
                <input
                  type="email"
                  name="email"
                  className="rounded-full bg-transparent border-2 outline-white outline-2 border-white w-full p-4 text-sm"
                />
              </label>
              <label>
                <span className="text-sm">message:</span>
                <br />
                <textarea
                  name="message"
                  className="rounded-3xl bg-transparent border-2 outline-white outline-2 border-white w-full h-[500px] p-4 text-sm"
                ></textarea>
              </label>
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
