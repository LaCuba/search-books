import { searchApi } from "../api/api"

const SET_SNIPPETS = "SET-SNIPPETS"

const initialState = {
  snippets: {
    0: { cover: "https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6012799976.jpg",
    title: "Как не pro*бать свою жизнь",
    author: "Байер Майк"
    },
    1: { cover: "https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6012799976.jpg",
    title: "Как не pro*бать свою жизнь",
    author: "Байер Майк"
    },
    2: { cover: "https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6012799976.jpg",
    title: "Как не pro*бать свою жизнь",
    author: "Байер Майк"
    },
    3: { cover: "https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6012799976.jpg",
    title: "Как не pro*бать свою жизнь",
    author: "Байер Майк"
    },
    4: { cover: "https://cdn1.ozone.ru/s3/multimedia-w/wc1200/6012799976.jpg",
    title: "Как не pro*бать свою жизнь",
    author: "Байер Майк"
    }
  }
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNIPPETS:
      return {
        ...state,
        snippets: action.snippets,
        count: action.count
      }

    default: 
      return state
  }
}

const setBooks = (snippets, count) => ({type: SET_SNIPPETS, snippets, count})

export const getBooks = (value) => (dispatch) => {
  debugger
  searchApi.getBooks(value)
  .then(response => {
    debugger
    dispatch(setBooks(response.docs, response.numFound))
  })
}

export default SearchReducer