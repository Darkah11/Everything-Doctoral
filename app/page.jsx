import Image from "next/image";
import heroImage1 from "@/public/hero-image-1.jpeg";
import heroImage2 from "@/public/hero-image-2.jpeg";
import heroImage3 from "@/public/hero-image-3.jpeg";
import heroImage4 from "@/public/hero-image-4.jpeg";
import meet from "@/public/meet.png";
import upskill from "@/public/upskill.png";
import membership from "@/public/membership.png";
import polygon from "@/public/Polygon.png";
import square from "@/public/square.png";
import circle from "@/public/circle.png";
import joinUs from "@/public/join-us.png";
import arrow from "@/public/arrow.svg";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <section className=" pt-20 px-5">
        <div>
          <h1 className=" lg:text-[54px] text-[32px] font-bold lg:max-w-[720px] max-w-[450px] md:text-center md:mx-auto lg:leading-[65px]">
            We offer you community, visibility, and knowledge base.
          </h1>
          <div className=" flex flex-row md:justify-center md:items-center gap-5 mt-12">
            <Button name={"Login"} variant={"btn-red md:w-[280px] w-[150px]"} />
            <Button
              name={"Sign Up"}
              variant={"btn-red-outline  md:w-[280px] w-[150px]"}
            />
          </div>
        </div>
        <div className=" flex justify-between gap-y-10 flex-wrap lg:flex-nowrap mt-32">
          <Image
            src={heroImage1}
            // width={355}
            // height={380}
            alt={"everything doctoral illustration"}
            className=" md:rounded-[0 20px 20px 0] rounded-[20px] relative object-cover -top-16 w-[46%] md:w-[23%]"
          />
          <Image
            src={heroImage2}
            // width={355}
            // height={380}
            alt={"everything doctoral illustration"}
            className=" rounded-[20px] w-[46%] md:w-[23%]"
          />
          <Image
            src={heroImage3}
            // width={355}
            // height={380}
            alt={"everything doctoral illustration"}
            className=" rounded-[20px] relative -top-16 w-[46%] md:w-[23%]"
          />
          <Image
            src={heroImage4}
            // width={355}
            // height={380}
            alt={"everything doctoral illustration"}
            className=" md:rounded-[20px 0 0  20px] object-cover rounded-[20px] w-[46%] md:w-[23%]"
          />
        </div>
        <div className=" bg-header-10 text-text-10 text-center italic md:py-7 py-3 md:text-4xl text-2xl font-bold">
          <p className="">
            Eat the <span className="  line relative z-10">elephant one</span>{" "}
            bite at a time<span className=" text-primary-10">.</span>
          </p>
        </div>
      </section>
      <section className=" lg:px-24 px-5 py-20">
        <div className=" md:text-center max-w-[800px] md:mx-auto">
          <h2 className=" md:text-[54px] text-[32px] font-bold">
            Learn Our <span className="line-two relative z-10">Essence</span>
          </h2>
          <p className=" md:text-lg mt-5">
            Are you a PhD student looking to upskill, network, and collaborate
            with like-minded individuals? You&apos;ve come to the right place!
            Our community is designed specifically for PhD students who want to
            take their academic journey to the next level.
          </p>
        </div>

        <div className=" flex gap-y-8 md:justify-between justify-center flex-wrap md:flex-nowrap mt-16">
          <div
            className=" flex justify-center items-center relative
          gap-5 flex-col border-[3px] border-primary-10 rounded-tl-[50px] rounded-br-[50px] md:w-[30%] w-[400px] px-10 pt-16 pb-10"
          >
            <Image
              src={circle}
              alt="circles design"
              className="absolute left-16 top-8"
            />
            <Image src={meet} alt="meet and grow illustration" />
            <div className=" max-w-[220px]">
              <h3 className=" text-xl font-bold">Meet & Grow</h3>
              <p className=" text-lg mt-8">
                Connect with like minded individuals and...{" "}
              </p>
            </div>
          </div>
          <div
            className=" flex justify-center items-center relative
          gap-5 flex-col border-[3px] border-primary-10 rounded-tl-[50px] w-[400px] rounded-br-[50px] md:w-[30%] px-10 pt-16 pb-10"
          >
            <Image
              src={square}
              alt="squares design"
              className="absolute left-16 top-8"
            />
            <Image src={upskill} alt="meet and grow illustration" />
            <div className=" max-w-[220px]">
              <h3 className=" text-xl font-bold">Upskill your doctorate</h3>
              <p className=" text-lg mt-8">
                Improve your expertise through our...{" "}
              </p>
            </div>
          </div>
          <div
            className=" flex justify-center items-center relative
          gap-5 flex-col border-[3px] border-primary-10 rounded-tl-[50px] w-[400px] rounded-br-[50px] md:w-[30%] px-10 pt-16 pb-10"
          >
            <Image
              src={polygon}
              alt="triangles design"
              className="absolute left-16 top-8"
            />
            <Image src={membership} alt="meet and grow illustration" />
            <div className=" max-w-[200px]">
              <h3 className=" text-xl font-bold">Membership</h3>
              <p className=" text-lg mt-8">
                Give visibility to your work and discover opportunities relevant
                to your...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:px-24 px-5 py-20 bg-header-10 text-text-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        <div className=" lg:max-w-[50%]">
          <div className=" md:text-center lg:text-left">
            <h2 className=" md:text-5xl text-3xl font-bold">
              Why <span className="line-three relative z-10">Join Us?</span>
            </h2>
            <p className=" md:text-2xl text-lg mt-5">
              Welcome to Everything Doctoral – <br /> Empowering PhD Students
            </p>
          </div>
          <div className=" mt-12 text-xl flex flex-col md:flex-row lg:flex-col gap-5">
            {/* each card */}
            <div className=" bg-card-10 text-header-10 md:w-[475px] w-full rounded-tl-[50px] rounded-br-[50px] px-5 py-10">
              <h3 className=" font-bold text-xl">Network</h3>
              <p className=" mt-3 text-lg font-medium">
                Connect with a diverse group of PhD students from various
                disciplines. Share ideas, discuss research, and build lasting
                professional relationships.
              </p>
            </div>

            <div className=" bg-card-10 text-header-10 md:w-[475px] w-full lg:mt-5 rounded-tl-[50px] rounded-br-[50px] px-5 py-10">
              <h3 className=" font-bold text-xl">Collaborate</h3>
              <p className=" mt-3 text-lg font-medium">
                Work together on research projects, co-author papers, and
                explore interdisciplinary opportunities with fellow scholars.
              </p>
            </div>
          </div>
        </div>
        <div className=" mx-auto lg:mx-0 lg:w-[40%]">
          <Image
            src={joinUs}
            alt="join us illustration"
            className=" lg:w-full"
          />
        </div>
      </section>
      <section className=" lg:px-24 px-5 py-20">
        <div className=" bg-card-20 border border-header-10 rounded-tl-[50px] rounded-br-[50px] py-5 px-5 text-center">
          <h2 className=" lg:text-[54px] text-[32px] font-bold">
            Join Our <span className=" line-four relative">Community</span> Today
          </h2>
          <p className=" md:text-xl max-w-[900px] mx-auto">
            Whether you're just starting your PhD or are deep into your
            research, our community offers the support and resources you need to
            succeed. Let's grow together!
          </p>
          <div className=" md:w-[80%] w-full mx-auto relative mt-10">
            <input
              type="text"
              placeholder="Enter Your Email Address Here: "
              className=" text-sm w-full border border-header-10 px-5 py-3 rounded-3xl outline-none bg-transparent"
            />
            <button className="bg-header-10 absolute right-1 top-0 bottom-0 m-auto h-[85%] aspect-square rounded-full">
              <Image src={arrow} className=" m-auto" width={10} height={10} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
