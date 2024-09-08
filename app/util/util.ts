export function formatDate(targetDate: Date, includeRelative = false) {
    let currentDate = new Date()
  
    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    let daysAgo = currentDate.getDate() - targetDate.getDate()
  
    let formattedDate = ''
  
    if (yearsAgo > 0) {
      formattedDate = `${yearsAgo}y ago`
    } else if (monthsAgo > 0) {
      formattedDate = `${monthsAgo}mo ago`
    } else if (daysAgo > 0) {
      formattedDate = `${daysAgo}d ago`
    } else {
      formattedDate = 'Today'
    }
  
    let fullDate = targetDate.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  
    if (!includeRelative) {
      return fullDate
    }
  
    return `${fullDate} (${formattedDate})`
  }
  