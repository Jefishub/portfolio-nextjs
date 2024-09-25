'use client'
import { Job as JobType } from "app/type/types"
import { formatDate } from "app/util/util"

export const JobShort = ({ job }: { job: JobType }) => {
    return <JobContainer>
        <DateBox start={job.startdt} end={job.enddt} />
        <EmployerAndTitleBox employer={job.employer} title={job.title} />
    </JobContainer>
}

export const JobFull = ({ job }: { job: JobType }) => {
    return <JobContainer>
        <DateBox start={job.startdt} end={job.enddt} />
        <EmployerAndTitleBox employer={job.employer} title={job.title} />
        <DescriptionBox desc={job.description} />
        <KeywordsBox keywords={job.keywords} />
    </JobContainer>
}

const JobContainer = ({ children }) => {
    return <div className="w-full flex flex-col group hover:scale-[1.02]">
        {children}
    </div>
}

const DateBox = ({ start, end }: { start: Date, end: Date | null }) => {
    return <p className="text-neutral-600 dark:text-neutral-400 text-xs tabular-nums">
        {formatDate(start)} - {end ? formatDate(end) : "Present"}
    </p>
}

const EmployerAndTitleBox = ({ employer, title }: { employer: string, title: string }) => {
    return <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
        <span className='font-bold'>{employer}:</span> {title}
    </p>
}

const DescriptionBox = ({ desc }: { desc: string }) => {
    return <div className="text-neutral-900 dark:text-neutral-100 tracking-tight mt-4 text-sm">
        {desc}
    </div>
}

const KeywordsBox = ({ keywords }: { keywords: string[] | undefined }) => {
    return keywords ? <div className="flex flex-row flex-wrap gap-2 justify-center mt-4 w-full">
        {keywords.map((word) => <KeywordBadge keyword={word} />)}
    </div> : null
}

const KeywordBadge = ({ keyword }: { keyword: string }) => {
    return <div className="bg-blue-100 text-blue-800 text-xs 
    font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {keyword}
    </div>
}