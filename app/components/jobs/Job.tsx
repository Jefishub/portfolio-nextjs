'use client'
import { Job as JobType } from "app/type/types"
import { formatDate } from "app/util/util"

export const JobShort = ({ job }: { job: JobType }) => {
    return <div className="w-full flex flex-col">
        <DateBox start={job.startdt} end={job.enddt} />
        <EmployerAndTitleBox employer={job.employer} title={job.title} />
    </div>
}

export const JobFull = ({ job }: { job: JobType }) => {
    return <div className="w-full flex flex-col">
        <DateBox start={job.startdt} end={job.enddt} />
        <EmployerAndTitleBox employer={job.employer} title={job.title} />
        <DescriptionBox desc={job.description} />
    </div>
}

const DateBox = ({ start, end }: { start: Date, end: Date }) => {
    return <p className="text-neutral-600 dark:text-neutral-400 text-xs tabular-nums">
        {formatDate(start)} - {formatDate(end)}
    </p>
}

const EmployerAndTitleBox = ({ employer, title }: { employer: string, title: string }) => {
    return <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
        <span className='font-bold'>{employer}:</span> {title}
    </p>
}

const DescriptionBox = ({ desc }: { desc: string }) => {
    return <div className="text-neutral-900 dark:text-neutral-100 tracking-tight mt-4 text-sm">
        {desc}
    </div>
}