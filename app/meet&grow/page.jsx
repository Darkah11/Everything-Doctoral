import React from "react";
import hero from "@/public/meet&grow.png";
import Image from "next/image";
import pic1 from "@/public/spotlight/pic1.png";
import pic2 from "@/public/spotlight/pic2.png";
import pic3 from "@/public/spotlight/pic3.png";
import pic4 from "@/public/spotlight/pic4.png";
import pic5 from "@/public/spotlight/pic5.png";
import pic6 from "@/public/spotlight/pic6.png";
import Link from "next/link";
import Button from "@/components/Button";

export default function MeetAndGrow() {
  return (
    <>
      <section className=" relative bg-primary-5">
        <Image
          src={hero}
          width={1443}
          height={493}
          alt="hero background image"
          className=" min-h-[500px] w-full object-cover "
        />
        <div className=" bg-primary-5 absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="  text-center max-w-[600px] text-text-10">
            <h2 className=" text-[54px] font-bold">Meet And Grow</h2>
            <p>
              Explore the inspiring journeys of PhD students in our Drs.
              Spotlight, connect with peers and professionals through Dr. What,
              and stay informed about upcoming opportunities in Events.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className=" px-24 py-20">
        <div className=" text-center">
          <h2 className=" text-5xl font-bold">Drs. <span className=" line-four relative">Spotlight</span></h2>
        </div>
        <div className=" flex justify-between flex-wrap gap-y-10 mt-16">
          <div className=" w-[31%]">
            <div className=" relative">
              <Image src={pic1} className=" w-full" width={350} height={380} />
              <div className=" bg-text-10 absolute -bottom-12 max-w-[270px] pt-4">
                <h3 className=" text-xl font-bold">
                  The Impact of Artificial Intelligence on Human Decision-Making
                </h3>
                <p className=" mt-3 text-xs">AUGUST, 14 2024</p>
              </div>
            </div>
            <div className=" mt-16">
              <p className=" text-lg pb-3">
                Explore how AI technologies are influencing decisions in various
                fields, from healthcare to finance, and the ethical
                implications...
              </p>
              <Link
                className=" text-xs text-primary-10 font-bold pt-10"
                href={"/"}
              >
                READ MORE
              </Link>
            </div>
          </div>

          <div className=" w-[31%]">
            <div className=" relative">
              <Image src={pic2} className=" w-full" width={350} height={380} />
              <div className=" bg-text-10 absolute -bottom-12 max-w-[270px] pt-4">
                <h3 className=" text-xl font-bold">
                  The Impact of Artificial Intelligence on Human Decision-Making
                </h3>
                <p className=" mt-3 text-xs">AUGUST, 14 2024</p>
              </div>
            </div>
            <div className=" mt-16">
              <p className=" text-lg pb-3">
                Explore how AI technologies are influencing decisions in various
                fields, from healthcare to finance, and the ethical
                implications...
              </p>
              <Link
                className=" text-xs text-primary-10 font-bold pt-10"
                href={"/"}
              >
                READ MORE
              </Link>
            </div>
          </div>

          <div className=" w-[31%]">
            <div className=" relative">
              <Image src={pic3} className=" w-full" width={350} height={380} />
              <div className=" bg-text-10 absolute -bottom-12 max-w-[270px] pt-4">
                <h3 className=" text-xl font-bold">
                  The Impact of Artificial Intelligence on Human Decision-Making
                </h3>
                <p className=" mt-3 text-xs">AUGUST, 14 2024</p>
              </div>
            </div>
            <div className=" mt-16">
              <p className=" text-lg pb-3">
                Explore how AI technologies are influencing decisions in various
                fields, from healthcare to finance, and the ethical
                implications...
              </p>
              <Link
                className=" text-xs text-primary-10 font-bold pt-10"
                href={"/"}
              >
                READ MORE
              </Link>
            </div>
          </div>

          <div className=" w-[31%]">
            <div className=" relative">
              <Image src={pic4} className=" w-full" width={350} height={380} />
              <div className=" bg-text-10 absolute -bottom-12 max-w-[270px] pt-4">
                <h3 className=" text-xl font-bold">
                  The Impact of Artificial Intelligence on Human Decision-Making
                </h3>
                <p className=" mt-3 text-xs">AUGUST, 14 2024</p>
              </div>
            </div>
            <div className=" mt-16">
              <p className=" text-lg pb-3">
                Explore how AI technologies are influencing decisions in various
                fields, from healthcare to finance, and the ethical
                implications...
              </p>
              <Link
                className=" text-xs text-primary-10 font-bold pt-10"
                href={"/"}
              >
                READ MORE
              </Link>
            </div>
          </div>

          <div className=" w-[31%]">
            <div className=" relative">
              <Image src={pic5} className=" w-full" width={350} height={380} />
              <div className=" bg-text-10 absolute -bottom-12 max-w-[270px] pt-4">
                <h3 className=" text-xl font-bold">
                  The Impact of Artificial Intelligence on Human Decision-Making
                </h3>
                <p className=" mt-3 text-xs">AUGUST, 14 2024</p>
              </div>
            </div>
            <div className=" mt-16">
              <p className=" text-lg pb-3">
                Explore how AI technologies are influencing decisions in various
                fields, from healthcare to finance, and the ethical
                implications...
              </p>
              <Link
                className=" text-xs text-primary-10 font-bold pt-10"
                href={"/"}
              >
                READ MORE
              </Link>
            </div>
          </div>

          <div className=" w-[31%]">
            <div className=" relative">
              <Image src={pic6} className=" w-full" width={350} height={380} />
              <div className=" bg-text-10 absolute -bottom-12 max-w-[270px] pt-4">
                <h3 className=" text-xl font-bold">
                  The Impact of Artificial Intelligence on Human Decision-Making
                </h3>
                <p className=" mt-3 text-xs">AUGUST, 14 2024</p>
              </div>
            </div>
            <div className=" mt-16">
              <p className=" text-lg pb-3">
                Explore how AI technologies are influencing decisions in various
                fields, from healthcare to finance, and the ethical
                implications...
              </p>
              <Link
                className=" text-xs text-primary-10 font-bold pt-10"
                href={"/"}
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button name={"Read more posts"} variant={"btn-red text-lg"} />
        </div>
      </section>
      <section className=" px-24 py-20">
      <div className=" text-center">
          <h2 className=" text-5xl font-bold">Upcoming <span className=" line-four relative">Events</span></h2>
        </div>

        {/* events block */}
        <div className=" flex justify-between mt-16">
          {/* first block */}
          <div className=" w-[48%] bg-card-20 border border-header-10 
          rounded-tl-[40px] rounded-br-[40px] px-8 py-24 flex flex-col gap-12">
            {/* event */}
            <div className=" flex items-center gap-5">
              <div className=" text-5xl font-bold text-center bg-card-30 px-3 py-7 shadow-xl">
                <p className=" text-primary-10">07</p>
                <p>SEPT</p>
              </div>
              <div className=" flex-1">
                <p className=" text-xs">BOOTCAMP</p>
                <h3 className=" text-sm font-bold mt-1">RESEARCH METHODS BOOTCAMP</h3>
                <div className=" flex gap-5 mt-5">
                  <Button name={"Get ticket"} variant={'btn-red'}/>
                  <Button name={"View more"} variant={'btn-outline'}/>
                </div>
              </div>
            </div>
            {/* event */}
            <div className=" flex items-center gap-5">
              <div className=" text-5xl font-bold text-center bg-card-30 px-3 py-7 shadow-xl">
                <p className=" text-primary-10">23</p>
                <p>SEPT</p>
              </div>
              <div className=" flex-1">
                <p className=" text-xs">BOOTCAMP</p>
                <h3 className=" text-sm font-bold mt-1">RESEARCH METHODS BOOTCAMP</h3>
                <div className=" flex gap-5 mt-5">
                  <Button name={"Get ticket"} variant={'btn-red'}/>
                  <Button name={"View more"} variant={'btn-outline'}/>
                </div>
              </div>
            </div>
            {/* event */}
            <div className=" flex items-center gap-5">
              <div className=" text-5xl font-bold text-center bg-card-30 px-3 py-7 shadow-xl">
                <p className=" text-primary-10">30</p>
                <p>SEPT</p>
              </div>
              <div className=" flex-1">
                <p className=" text-xs">BOOTCAMP</p>
                <h3 className=" text-sm font-bold mt-1">RESEARCH METHODS BOOTCAMP</h3>
                <div className=" flex gap-5 mt-5">
                  <Button name={"Get ticket"} variant={'btn-red'}/>
                  <Button name={"View more"} variant={'btn-outline'}/>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[48%] bg-card-20 border border-header-10 
          rounded-tl-[40px] rounded-br-[40px] px-8 py-24 flex flex-col gap-12">
            {/* event */}
            <div className=" flex items-center gap-5">
              <div className=" text-5xl font-bold text-center bg-card-30 px-3 py-7 shadow-xl">
                <p className=" text-primary-10">05</p>
                <p>OCT</p>
              </div>
              <div className=" flex-1">
                <p className=" text-xs">BOOTCAMP</p>
                <h3 className=" text-sm font-bold mt-1">RESEARCH METHODS BOOTCAMP</h3>
                <div className=" flex gap-5 mt-5">
                  <Button name={"Get ticket"} variant={'btn-red'}/>
                  <Button name={"View more"} variant={'btn-outline'}/>
                </div>
              </div>
            </div>
            {/* event */}
            <div className=" flex items-center gap-5">
              <div className=" text-5xl font-bold text-center bg-card-30 px-3 py-7 shadow-xl">
                <p className=" text-primary-10">14</p>
                <p>OCT</p>
              </div>
              <div className=" flex-1">
                <p className=" text-xs">BOOTCAMP</p>
                <h3 className=" text-sm font-bold mt-1">RESEARCH METHODS BOOTCAMP</h3>
                <div className=" flex gap-5 mt-5">
                  <Button name={"Get ticket"} variant={'btn-red'}/>
                  <Button name={"View more"} variant={'btn-outline'}/>
                </div>
              </div>
            </div>
            {/* event */}
            <div className=" flex items-center gap-5">
              <div className=" text-5xl font-bold text-center bg-card-30 px-3 py-7 shadow-xl">
                <p className=" text-primary-10">29</p>
                <p>NOV</p>
              </div>
              <div className=" flex-1">
                <p className=" text-xs">BOOTCAMP</p>
                <h3 className=" text-sm font-bold mt-1">RESEARCH METHODS BOOTCAMP</h3>
                <div className=" flex gap-5 mt-5">
                  <Button name={"Get ticket"} variant={'btn-red'}/>
                  <Button name={"View more"} variant={'btn-outline'}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center mt-10">
            <Button name={'Check more events'} variant={'btn-red'}/>
        </div>
      </section>
    </>
  );
}
