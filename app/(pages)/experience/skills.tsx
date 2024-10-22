import React from "react"
import { skillsList } from "./skillList";

export const SkillsCard = () => {
    return (
        <div className="flex flex-col">
            {/* Outer grid with dynamic column widths */}
            <div className="grid grid-cols-[auto_repeat(11,1fr)] gap-2 ring-1 p-4">
                {/* Header row */}
                <div className="flex col-span-1 h-6 row-start-1 font-bold">Years</div>
                <div className="col-span-2">0</div>
                <div className="col-span-2">1</div>
                <div className="col-span-2">2</div>
                <div className="col-span-2">3</div>
                <div className="col-span-2">4</div>
                <div className="col-span-1">5+</div>

                {/* Skill rows */}
                {skillsList.map((skill, i) => {
                    return (
                        <React.Fragment key={i}>
                            {/* First column: Skill name */}
                            <div className="col-span-1 h-6">{skill.name}</div>

                            {/* Second column: Skill progress bars */}
                            <div className="content-center col-span-11">
                                <div className="grid grid-cols-11">
                                    {/* Work experience (first row) */}
                                    <div
                                        className={"bg-amber-300 row-start-1 h-2"}
                                        style={{ gridColumn: `span ${skill.work * 2 < 11 ? skill.work * 2 : 11}`, display: skill.work === 0 ? 'none' : 'block' }}
                                    ></div>

                                    {/* Hobby experience (second row) */}
                                    <div
                                        className={"bg-blue-300 row-start-2 h-1"}
                                        style={{ gridColumn: `span ${skill.hobby * 2 * 2 < 11 ? skill.hobby * 2 : 11}` }}
                                    ></div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
            <div className="flex flex-row gap-2 m-2">
                <div className="bg-amber-300 flex text-xs w-14 text-black pl-2">*Work</div>
                <div className="bg-blue-300 flex text-xs w-14 text-black pl-2">*Hobby</div>
            </div>
        </div>
    );
};