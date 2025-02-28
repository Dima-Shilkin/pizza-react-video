import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterSliceState, Sort } from "./types"

export const initialState: FilterSliceState = {
  searchValue: '',
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
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload
    },
    setActiveSort(state, action: PayloadAction<boolean>) {
      state.activeSort = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setFilters(state, { payload }: PayloadAction<Partial<FilterSliceState>>) {
      if (payload.sort) {
        state.sort = payload.sort;
      }
      if (payload.currentPage === 0 || payload.currentPage) {
        state.currentPage = payload.currentPage;
      }
      if (payload.categoryId === 0 || payload.categoryId) {
        state.categoryId = payload.categoryId;
      }
    },
  },
})

export const {setCategoryId, setSort, setActiveSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer