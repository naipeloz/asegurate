import { blockContent } from './objects/blockContent'
import { siteSettings } from './documents/siteSettings'
import { service } from './documents/service'
import { teamMember } from './documents/teamMember'
import { newsPost } from './documents/newsPost'

export const schemaTypes = [
  // Objects
  blockContent,
  // Documents
  siteSettings,
  service,
  teamMember,
  newsPost,
]
