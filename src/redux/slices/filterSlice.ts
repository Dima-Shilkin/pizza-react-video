import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort:{
    name: "популярности",
    sortProperty: "rating",
  },
  activeSort: false
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setActiveSort(state, action) {
      state.activeSort = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
  },
})

export const {setCategoryId, setSort, setActiveSort, setCurrentPage} = filterSlice.actions

export default filterSlice.reducer