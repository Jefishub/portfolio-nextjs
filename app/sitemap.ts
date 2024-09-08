import { jobs as jobList } from './jobs/mock'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let jobs = jobList.map((job) => ({
    url: `${baseUrl}/blog/${job.slug}`
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...jobs]
}
