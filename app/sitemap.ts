import { jobs as jobList } from './(pages)/experience/jobList'
export const baseUrl = 'https://jeremanni.com'

export default async function sitemap() {
  let jobs = jobList.map((job) => ({
    url: `${baseUrl}/experience/jobs/${job.slug}`
  }))

  let routes = ['', '/experience', '/apps'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...jobs]
}
