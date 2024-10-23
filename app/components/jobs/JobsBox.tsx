'use client'

import { jobs } from "app/(pages)/experience/jobList"
import { Jobs } from "./jobs"

export const JobsBox = () => {

    return <div>
        <div className="text-xl mb-4 font-bold">Work experience</div>
        <Jobs allJobs={jobs} />
    </div>
}