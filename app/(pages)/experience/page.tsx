import { Jobs } from "app/components/jobs/jobs"
import { jobs } from "./jobList"
import { SkillsCard } from "./skills"

export default function Page() {
    return <div>
        <div className="text-xl mb-4 font-bold">Work experience</div>
        <Jobs allJobs={jobs} />
        <div className="text-xl font-bold my-4">Programming Skills</div>
        <SkillsCard />
    </div>
}