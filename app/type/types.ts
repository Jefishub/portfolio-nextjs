
export type Job = {
    startdt: Date,
    enddt: Date | null,
    employer: string,
    title: string,
    slug: string,
    description: string,
    keywords?: string[]
  }