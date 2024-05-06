"use client"
import React, { createContext, useContext, ReactNode, Dispatch, useEffect } from "react"
import { Draft } from "immer"
import { useImmerReducer } from "use-immer"

interface TrackFormProps {
  track: string
  state: string
  county: string
  city: string
  name: string
  email: string
  phone: string
}

interface AppState {
  appToken: string
  trackFrom: TrackFormProps
}

type Action =
  | { type: "LOGIN"; data: { token: string } }
  | { type: "LOGOUT" }
  | { type: "UPDATE_TRACK_FORM"; payload: Partial<TrackFormProps> }

interface AppContextType {
  appState: AppState
  appDispatch: Dispatch<Action>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

function ourReducer(draft: Draft<AppState>, action: Action): void {
  switch (action.type) {
    case "LOGIN":
      draft.appToken = action.data.token
      return
    case "LOGOUT":
      draft.appToken = ""
      return
    case "UPDATE_TRACK_FORM": {
      draft.trackFrom = { ...draft.trackFrom, ...action.payload }
      return
    }
    default:
      return
  }
}

const initialState: AppState = {
  appToken: "",
  trackFrom: {
    track: "",
    state: "",
    county: "",
    city: "",
    name: "",
    email: "",
    phone: "",
  },
}

export const useApp = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appState, appDispatch] = useImmerReducer(ourReducer, initialState)

  const contextValue: AppContextType = { appState, appDispatch }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}
