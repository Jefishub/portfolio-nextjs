'use client'

import { jobs } from "app/(pages)/jobs/jobList"
import Modal from "./modal";
import { JobFull } from "app/components/jobs/Job";

export default function JobModal({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const job = jobs.find((job) => job.slug === slug)
    if (!job) return null
    return <Modal>
        <div>
            <JobFull job={job} />
        </div>
    </Modal>
}