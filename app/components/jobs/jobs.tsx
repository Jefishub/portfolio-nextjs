import { Job } from 'app/type/types'
import { formatDate } from 'app/util/util'
import Link from 'next/link'

export function Jobs({ allJobs }: { allJobs: Job[] }) {

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
            href={`/job/${job.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 text-xs tabular-nums">
                {formatDate(job.startdt)} - {formatDate(job.enddt)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                <span className='font-bold'>{job.employer}:</span> {job.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
