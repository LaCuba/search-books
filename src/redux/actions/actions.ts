import * as search from './search'
import * as preloader from './preloader'
import * as modal from './modal'
import { ActionType } from 'typesafe-actions'

const actions = { search, preloader, modal }

export type Actions = ActionType<typeof actions>

export default actions