import React, { useContext } from "react";
import { professionalExperienceData } from "../constants"; // Ensure this line imports professionalExperienceData
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const ProfessionalExperience = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="experience"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Professional Experience
        </h2>
        <div className="mt-8 flex md:flex-row justify-around flex-col md:items-stretch items-center ">
          {professionalExperienceData.map((el) => ( // Ensure this line uses professionalExperienceData
            <motion.div
              key={el.name}
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={
                theme.state.darkMode
                  ? "md:w-2/5 p-6 bg-white rounded-lg flex flex-col mt-8 shadow-lg"
                  : "md:w-2/5 p-6 bg-gray-800 text-white rounded-lg flex flex-col mt-8 shadow-lg"
              }
            >
              {el.img && (
                <img
                  src={el.img}
                  alt={el.name}
                  className="w-16 h-16 mx-auto mb-4"
                />
              )}
              <h4 className="text-2xl font-bold mt-4 text-center">
                {el.role}
              </h4>
              <p className="text-lg font-semibold text-blue-500 text-center">
                {el.company}
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400 text-center mb-2">
                {el.duration}
              </p>
              <p className="text-lg mt-2 text-justify">{el.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
