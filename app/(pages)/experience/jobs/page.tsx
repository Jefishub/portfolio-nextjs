import { Jobs } from "app/components/jobs/jobs"
import { jobs } from "../jobList"

export default function Page() {
    return <div>
        <div className="text-xl mb-4 font-bold">Work experience</div>
        <Jobs allJobs={jobs} />
    </div>
}