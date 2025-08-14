import React from "react";
import { techStackData } from "../data/techData"; // Adjust the import path as needed

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="bg-transparent py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-12">
          My Tech Stack
        </h2>
        <div className="space-y-10">
          {techStackData.map(({ category, icon: CategoryIcon, items }) => (
            <div key={category}>
              <h3 className="flex items-center font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-5">
                <CategoryIcon className="w-7 h-7 mr-4 text-neutral-500" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex items-center bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-neutral-300 dark:hover:border-neutral-600"
                  >
                    {React.cloneElement(icon, {
                      className: `${icon.props.className} w-6 h-6 mr-3`,
                    })}
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
