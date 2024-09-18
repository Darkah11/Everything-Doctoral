import Image from "next/image";
import React from "react";
import pic1 from "@/public/spotlight/pic1.png";
import ai from "@/public/ai.png";

export default function details() {
  return (
    <>
      <section  >
        <Image
          src={pic1}
          alt="blog image"
          className=" w-full h-[700px] object-cover object-top"
        />
      </section>
      <section>
        <div className=" max-w-[800px] mx-auto py-10 px-16 shadow-md relative -top-[250px] bg-text-10 z-10" >
          <div className=" text-center">
            <h2 className=" text-5xl font-bold">
              Drs. <span className=" line-four relative">Spotlight</span>
            </h2>
          </div>
          <div className=" mt-16">
            <h3 className=" text-3xl font-bold uppercase">
              The Impact of Artificial Intelligence on Human Decision-Making
            </h3>
            <div className=" flex justify-between items-center mt-12 italic text-sm font-light">
              <p>Written by Drs Spotlight</p>
              <p>July 5th, 2024</p>
              <p>Mining & Corporation</p>
            </div>
          </div>
          <div className=" mt-8">
            <h4 className=" text-3xl font-semibold">
              The Impact of Artificial Intelligence on Human Decision-Making.{" "}
              <br />
              For a comprehensive exploration of this subject, you may want to
              consider discussing the following points:
            </h4>
            <ul className=" capitalize list-decimal text-3xl font-light ml-7 flex flex-col gap-10 mt-10">
              <li>
                <p>
                  Definition of Artificial Intelligence (AI): <br /> Explain what AI is
                  and how it functions, including its various types (e.g.,
                  machine learning, neural networks).
                </p>
              </li>
              <li>
                <p>
                  AI in Decision-Making: Discuss how AI systems are used to
                  assist in decision-making processes across different sectors
                  such as healthcare, finance, and marketing.
                </p>
              </li>
              <li>
                <p>Benefits of AI in Decision-Making:</p>
                <ul className=" list-disc ml-7 flex flex-col gap-2 mt-2">
                  <li>
                    Enhanced efficiency and speed in processing large datasets.
                  </li>
                  <li>Improved accuracy in predictions and outcomes.</li>
                  <li>
                    Ability to identify patterns and insights that may not be
                    apparent to human decision-makers.
                  </li>
                </ul>
                <Image src={ai} alt="blog details image" className=" w-full mt-4"/>
              </li>
              <li>
                <p>
                  Case Studies: Provide examples of organizations or scenarios
                  where AI has significantly impacted decision-making,
                  highlighting both positive outcomes and challenges faced.
                </p>
              </li>
              <li>
                <p>
                  Future Implications: Speculate on how the integration of AI in
                  decision-making might evolve, including potential advancements
                  and societal impacts.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
