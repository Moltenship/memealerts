import wretch from 'wretch'
const baseurl = 'https://memealerts.com/api'

export const apiClient = wretch(baseurl)
