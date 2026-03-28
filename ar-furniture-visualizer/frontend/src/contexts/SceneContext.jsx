import { createContext, useContext, useReducer, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getFurnitureById, getColorThree } from '../data/furnitureData'

// ── Types ──
const ADD_OBJECT    = 'ADD_OBJECT'
const REMOVE_OBJECT = 'REMOVE_OBJECT'
const SELECT_OBJECT = 'SELECT_OBJECT'
const UPDATE_COLOR  = 'UPDATE_COLOR'
const UPDATE_TRANSFORM = 'UPDATE_TRANSFORM'
const RESET_SCENE   = 'RESET_SCENE'
const SET_AR_MODE   = 'SET_AR_MODE'
const SET_ROOM_IMAGE = 'SET_ROOM_IMAGE'

// ── Initial State ──
const initialState = {
  objects: [],          // Array of SceneObject
  selectedId: null,     // ID of selected object
  isARMode: false,      // true = mobile WebXR, false = desktop
  roomImage: null,      // data URL of uploaded room photo
}

// ── Reducer ──
function sceneReducer(state, action) {
  switch (action.type) {
    case ADD_OBJECT: {
      const furniture = getFurnitureById(action.furnitureId)
      if (!furniture) return state
      const newObj = {
        id:          uuidv4(),
        furnitureId: furniture.id,
        name:        furniture.name,
        emoji:       furniture.emoji,
        colorKey:    furniture.defaultColor,
        colorHex:    getColorThree(furniture.defaultColor),
        scale:       1.0,
        rotationY:   0,
        addedAt:     Date.now(),
      }
      return { ...state, objects: [...state.objects, newObj], selectedId: newObj.id }
    }

    case REMOVE_OBJECT:
      return {
        ...state,
        objects:    state.objects.filter(o => o.id !== action.id),
        selectedId: state.selectedId === action.id ? null : state.selectedId,
      }

    case SELECT_OBJECT:
      return { ...state, selectedId: action.id }

    case UPDATE_COLOR: {
      const colorHex = getColorThree(action.colorKey)
      return {
        ...state,
        objects: state.objects.map(o =>
          o.id === action.id ? { ...o, colorKey: action.colorKey, colorHex } : o
        ),
      }
    }

    case UPDATE_TRANSFORM:
      return {
        ...state,
        objects: state.objects.map(o =>
          o.id === action.id ? { ...o, ...action.transform } : o
        ),
      }

    case RESET_SCENE:
      return { ...state, objects: [], selectedId: null }

    case SET_AR_MODE:
      return { ...state, isARMode: action.value }

    case SET_ROOM_IMAGE:
      return { ...state, roomImage: action.url }

    default:
      return state
  }
}

// ── Context ──
const SceneContext = createContext(null)

export function SceneProvider({ children }) {
  const [state, dispatch] = useReducer(sceneReducer, initialState)

  const addObject = useCallback((furnitureId) => {
    dispatch({ type: ADD_OBJECT, furnitureId })
  }, [])

  const removeObject = useCallback((id) => {
    dispatch({ type: REMOVE_OBJECT, id })
  }, [])

  const selectObject = useCallback((id) => {
    dispatch({ type: SELECT_OBJECT, id })
  }, [])

  const updateColor = useCallback((id, colorKey) => {
    dispatch({ type: UPDATE_COLOR, id, colorKey })
  }, [])

  const updateTransform = useCallback((id, transform) => {
    dispatch({ type: UPDATE_TRANSFORM, id, transform })
  }, [])

  const resetScene = useCallback(() => {
    dispatch({ type: RESET_SCENE })
  }, [])

  const setARMode = useCallback((value) => {
    dispatch({ type: SET_AR_MODE, value })
  }, [])

  const setRoomImage = useCallback((url) => {
    dispatch({ type: SET_ROOM_IMAGE, url })
  }, [])

  const selectedObject = state.objects.find(o => o.id === state.selectedId) || null

  return (
    <SceneContext.Provider value={{
      objects: state.objects,
      selectedId: state.selectedId,
      selectedObject,
      isARMode: state.isARMode,
      roomImage: state.roomImage,
      addObject,
      removeObject,
      selectObject,
      updateColor,
      updateTransform,
      resetScene,
      setARMode,
      setRoomImage,
    }}>
      {children}
    </SceneContext.Provider>
  )
}

export const useScene = () => {
  const ctx = useContext(SceneContext)
  if (!ctx) throw new Error('useScene must be used within SceneProvider')
  return ctx
}
