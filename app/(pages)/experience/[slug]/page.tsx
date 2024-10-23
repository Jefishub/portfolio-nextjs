import { jobs } from "../mock"

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const content = jobs.find((job) => job.slug === slug)

    if (!content) return null

    return <div>
        {content.employer}
    </div>
}