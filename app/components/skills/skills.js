"use client"

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skillImage";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {

    return (
        <div className="flex flex-col items-center justify-start min-h-fit">
            <div className="skillsHeader">
                <h2 style={{ color: "#1D9BF0" }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div
                                className="skill--box cursor-pointer !bg-[#0c0b33] !shadow-[0px_0px_12px_#1D9BF0]"
                                key={id}>
                                <Image
                                    src={skillsImage(skill)?.src}
                                    alt={skill}
                                    width={50}
                                    height={50}
                                />
                                <h3 className="text-[#EFF3F4]">
                                    {skill}
                                </h3>
                                <p></p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills;
