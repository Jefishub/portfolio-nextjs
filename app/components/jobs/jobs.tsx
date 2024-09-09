import { Job as JobType } from 'app/type/types'
import Link from 'next/link'
import { JobShort } from './Job'

export function Jobs({ allJobs }: { allJobs: JobType[] }) {

  return (
    <div>
      {allJobs
        .sort((a, b) => {
          if (
            new Date(a.startdt) > new Date(b.startdt)
          ) {
            return -1
          }
          return 1
        })
        .map((job) => (
          <Link
            key={job.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/jobs/${job.slug}`}
          >
            <JobShort job={job} />
          </Link>
        ))}
    </div>
  )
}
