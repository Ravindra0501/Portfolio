import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[75%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* work Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard Icon={FaCodepen} role="Full Stack Developer" />
            <ResumeCard Icon={FaReact} role="Frontend Developer" />
            <ResumeCard Icon={BsDatabase} role="Backend Developer" />
          </div>
        </div>
        {/* Education Part */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={BiBadge}
              role="Master in Computer Application"
              date="June 2023 - June 2025"
            />
            <ResumeCard
              Icon={FaReact}
              role="Bachelor in Computer Application "
              date="June 2020 - June 2023"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Certificate in Web Development"
              date="August 2023 - June 2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
