'use client'
import { jobs } from "app/jobs/mock"
import { Jobs } from "./jobs"
import { useState } from "react"
import { Job } from "app/type/types"

export const JobsWrapper = () => {
    const [jobList, setJobList] = useState<Job[]>(jobs.slice(0, 3))
    const [show, setShow] = useState(false)

    const onClickAction = () => {
        setJobList(!show ? jobs : jobs.slice(0, 3))
        setShow(!show)
    }
    
    return <div>
        <div className="text-xl mb-4 font-bold">Work experience</div>
        <Jobs allJobs={jobList} />
        <button onClick={onClickAction}>Show more</button>
    </div>
}