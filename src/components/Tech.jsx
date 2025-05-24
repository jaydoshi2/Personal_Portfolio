import React from "react";

import { BallCanvas } from "./canvas/index.js"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants/index.js"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {technology.icon ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full">
              <span className="text-sm">{technology.name}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "Tech")

