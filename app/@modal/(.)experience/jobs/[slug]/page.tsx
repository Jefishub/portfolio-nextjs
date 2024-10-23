'use client'

import { jobs } from "app/(pages)/experience/jobList";
import { JobFull } from "app/components/jobs/Job";
import { use } from 'react'
import Modal from "./modal";
export default function JobModal({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = use(params)
    const job = jobs.find((job) => job.slug === slug)
    if (!job) return null
    return <Modal>
        <div>
            <JobFull job={job} />
        </div>
    </Modal>
}