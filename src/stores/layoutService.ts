import { createSlice } from "@reduxjs/toolkit"

export const TAB_LAYOUT_REDUCER_NAME = "tabLayout"

export interface ITab {
  key: string
  label: string
}
export interface ITabLayoutState {
  tabs: ITab[]
  activeTab?: string
}

const initialState: ITabLayoutState = {
  tabs: [],
  activeTab: "",
}

const slice = createSlice({
  name: TAB_LAYOUT_REDUCER_NAME,
  initialState,
  reducers: {
    initLayoutTab(state, actions) {
      const { menu, navigate } = actions.payload
      if (!state.tabs.find((tab) => tab.key === menu.key)) {
        state.tabs.push(menu)
      }
      navigate(menu.key, { replace: true })
      state.activeTab = menu.key
    },
    updateLayoutTab(state, actions) {
      const { key, navigate } = actions.payload
      state.activeTab = key
      navigate(key, { replace: true })
    },
    removeLayoutTab(state, actions) {
      const { key, navigate } = actions.payload
      if (state.tabs.length <= 1) {
        return
      }
      state.tabs = state.tabs.filter((tab) => tab.key !== key)
      if (state.activeTab === key) {
        const lastTab = state.tabs[state.tabs.length - 1]
        navigate(lastTab.key, { replace: true })
        state.activeTab = lastTab.key
      }
    },
  },
})

export const { initLayoutTab, updateLayoutTab, removeLayoutTab } = slice.actions

export const tabLayoutReducer = slice.reducer
