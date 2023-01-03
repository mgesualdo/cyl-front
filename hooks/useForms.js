import create from "zustand"
import { devtools } from "zustand/middleware"
import { toggleItem } from "../helpers/arrays"

const INITIAL_STATES = {
  auth: { email: "", code: "" },
  person: {
    type: "",
    areas: [],
  },
}

export const useStore = create(
  devtools(
    (set) => ({
      auth: INITIAL_STATES["auth"],
      modal: { show: "" },
      person: INITIAL_STATES["person"],
      user: {},
      set: ({ data, form }) => {
        Object.keys(data).forEach((fieldName) => {
          set(
            (state) => ({
              ...state,
              [form]: { ...state[form], [fieldName]: data[fieldName] },
            }),
            false,
            `set-${form}`
          )
        })
      },
      setArray: ({ item, form, field, toggleField }) => {
        set(
          (state) => {
            const currentArray = state[form][field]
            const newArray = toggleItem(currentArray, item, toggleField)

            return {
              ...state,
              [form]: { ...state[form], [field]: newArray },
            }
          },
          false,
          `setArray-${form}`
        )
      },
      clean: ({ form }) => {
        set(
          (state) => ({
            ...state,
            [form]: INITIAL_STATES[form],
          }),
          false,
          `clean-${form}`
        )
      },
    }),
    { enabled: process.env.NEXT_PUBLIC_CUSTOM_ENV === "dev" }
  )
)

const useForms = ({ form }) => {
  const set = useStore((state) => state.set)
  const clean = useStore((state) => state.clean)
  const setArray = useStore((state) => state.setArray)

  const setFields = ({ data }) => set({ data, form })
  const showModal = (modal) =>
    set({ data: { show: form || modal }, form: "modal" })
  const hideModal = () => set({ data: { show: "" }, form: "modal" })

  const setArrayField = ({ item, field, toggleField }) =>
    setArray({ item, field, toggleField, form })

  const cleanForm = () => clean({ form })

  return { setFields, setArrayField, showModal, hideModal, cleanForm }
}

export default useForms
