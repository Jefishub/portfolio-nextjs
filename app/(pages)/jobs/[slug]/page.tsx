import { jobs } from "../mock"

export default function Page({ params  }: { params : { slug: string } }) {
    const content = jobs.find((job) => job.slug === params .slug)

    if (!content) return null

    return <div>
        {content.employer}
    </div>
}