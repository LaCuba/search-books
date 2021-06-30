import { ActionType } from 'typesafe-actions'

import * as search from './search'
import * as preloader from './preloader'
import * as modal from './modal'

const actions = { search, preloader, modal }

export type Action = ActionType<typeof actions>

export default actions