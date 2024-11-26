import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NewLetterContent() {
  return (
    <section className="ezy__contents10_YDxtR3zL py-14 md:py-24 bg-white  text-zinc-900 ">
      <div className="container px-4">
        <div className="grid grid-cols-12 px-14">
          <div className="col-span-12">
            <h6 className="opacity-75 font-bold">
              Home <FontAwesomeIcon icon={faChevronRight} className="mx-1" />{" "}
              Blog
              <FontAwesomeIcon icon={faChevronRight} className="mx-1" />
              <span className="opacity-75">Article</span>
            </h6>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="flex flex-col justify-center h-full">
              <h6 className="text-blue-600 font-medium">
                <em>#family</em>
              </h6>
              <h2 className="text-[32px] font-light md:text-[45px] leading-tight">
                I cattle third firament winged man green given every wing opened
                light.
              </h2>
              {/* avatar */}
              <Avatar />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <div className="my-6 md:my-0">
              <img
                src="https://cdn.easyfrontend.com/pictures/about/about9.jpg"
                alt=""
                className="max-w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-12 md:pt-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <Contents />
          </div>
        </div>
      </div>
    </section>
  );
}

const Contents = () => (
  <div>
    <p className="text-[17px] opacity-75 mb-4">
      Thing upon. In doesnt dont land i our third gathered gathered their man
      Their youre set in this world.
    </p>
    <p className="text-[17px] opacity-75 mb-2">
      Is heaven male their dry doesnt without him set saw two him man itself
      second fifth light over fish over which creepeth void dont. Image darkness
      gathering. All hath dont it, abundantly darkness cant forth appear, in.
      Whales. Itself male wont grass own grass. So said. Place day very signs
      saw great saying is open evening I. Yielding replenish face darkness in
      winged. Likeness fifth bearing. Moved i itself there creepeth isnt youll
      meat seas set divide firmament. Blessed signs earth was our give. Kind and
      of of living him moving tree form herb third and face. Face meat meat.
    </p>
    <p className="text-[17px] opacity-75 mt-4 mb-2">
      Wont life face upon second creature youre Seas Moveth earth given deep
      abundantly green years upon man behold night to Sixth divide brought. Were
      gathered green, set forth set shall image deep our seed after made living
      light their blessed bring may sea Creepeth fourth which sea firmament
      stars saw shed behold signs created thing called very itself shed
      creepeth. Upon female brought. Moving evening be fowl bring hath moveth
      behold spirit, our theyre fruit the him first them Moveth is. Light great
      form stars. Great. Make is them saw waters creepeth moveth brought behold,
      fly darkness have whose god, tree seas seasons him youre brought fruitful
      great bearing behold wont upon evening. Replenish. Their god morning youll
      image. Fish shed that rule forth. Place god own two. Set kind to them. It.
      Created together waters deep male day life youll fowl. Tree give in so
      fish. Life first, upon saw fourth youll set behold under, make signs
      greater land two make seed One.
    </p>
  </div>
);

const Avatar = () => (
  <div className="flex items-center mt-12">
    <div className="mr-2">
      <img
        src="https://cdn.easyfrontend.com/pictures/contents/avatar.jpeg"
        alt=""
        className="max-w-full h-auto rounded-full border"
        width="47"
      />
    </div>
    <div className="text-start">
      <h6 className="font-bold">JOHN DOE</h6>
      <p className="opacity-75 text-sm">Product Designer</p>
    </div>
  </div>
);
