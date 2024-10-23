import { JobFull } from "app/components/jobs/Job"
import { jobs } from "../../jobList"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const job = jobs.find((job) => job.slug === slug)

    if (!job) return null

    return <JobFull job={job} />
}