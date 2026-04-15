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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {professionalExperienceData.map((el) => (
            <motion.div
              key={el.name}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                hidden: { opacity: 0, y: 30 },
              }}
              className={
                theme.state.darkMode
                  ? "p-6 md:p-7 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col border border-gray-200"
                  : "p-6 md:p-7 bg-gray-800 text-white rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col border border-gray-700"
              }
            >
              <div className="flex items-start gap-4">
                {el.img && (
                  <img
                    src={el.img}
                    alt={el.name}
                    className="w-14 h-14 rounded-md object-cover flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl font-bold leading-tight">
                    {el.role}
                  </h4>
                  <p className="text-base font-semibold text-blue-500 mt-1">
                    {el.company}
                  </p>
                  <p
                    className={
                      theme.state.darkMode
                        ? "text-sm text-gray-500 mt-0.5"
                        : "text-sm text-gray-400 mt-0.5"
                    }
                  >
                    {el.duration}
                  </p>
                </div>
              </div>
              <p
                className={
                  theme.state.darkMode
                    ? "text-base mt-4 text-gray-700 leading-relaxed"
                    : "text-base mt-4 text-gray-200 leading-relaxed"
                }
              >
                {el.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
