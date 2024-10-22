'use client'

import { jobs } from "app/(pages)/jobs/jobList"
import Modal from "./modal";
import { JobFull } from "app/components/jobs/Job";
import { use } from 'react'
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