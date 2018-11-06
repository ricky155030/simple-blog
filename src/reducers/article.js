import { chain } from 'lodash'

const initialState = {
  all: {}
}

const reducer = (state = initialState, actions) => {
  switch(actions.type) {
    case 'RECEIVE_ARTICLES':
      return {
        ...state,
        all: {
          ...state.all,
          ...actions.data
        }
      }
    case 'REMOVE_ARTICLE':
      return {
        ...state,
        all: chain(state.all)
          .omit(actions.id)
          .value()
      }
    default:
      return state
  }
}

export default reducer
