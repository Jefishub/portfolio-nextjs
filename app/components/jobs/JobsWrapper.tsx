'use client'

import { Jobs } from "./jobs"
import { useState } from "react"
import { Job } from "app/type/types"
import { jobs } from "app/(pages)/jobs/jobList"

const JOBCOUNT = 3

export const JobsWrapper = () => {
    const [jobList, setJobList] = useState<Job[]>(jobs.slice(0, JOBCOUNT))
    const [show, setShow] = useState(false)

    const onClickAction = () => {
        setJobList(!show ? jobs : jobs.slice(0, JOBCOUNT))
        setShow(!show)
    }

    return <div>
        <div className="text-xl mb-4 font-bold">Work experience</div>
        <Jobs allJobs={jobList} />
        {!show && <div>...</div>}
        <button onClick={onClickAction} className="text-xs cursor-pointer hover:scale-105">
            {show ? "show less ↑" : "show more ↓"}
        </button>
    </div>
}