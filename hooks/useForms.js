import create from "zustand"
import { devtools } from "zustand/middleware"
import { isInArray, toggleItem } from "../helpers/arrays"

export const useStore = create(
  devtools(
    (set) => ({
      auth: { email: "", code: "" },
      person: {
        type: "",
        areas: [],
      },
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
            [form]: {},
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

  const setArrayField = ({ item, field, toggleField }) =>
    setArray({ item, field, toggleField, form })

  const cleanForm = () => clean({ form })

  return { setFields, setArrayField, cleanForm }
}

export default useForms
