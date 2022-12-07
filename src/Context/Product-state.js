import { useReducer } from "react"
import { MyContext } from "./My-context"
import { GET_CATEGORY } from './Types'
import { ProductReducer } from "./Product-reduser"



export const ProductState = ({ children }) => {
    const initialState = {
        data: [],
        categories: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)
    const getCategoryState = (data) => dispatch({ type: GET_CATEGORY, payload: data })

    return (
        <MyContext.Provider value={{
            data: state.data,
            categories: state.categories,
            getCategoryState,
        }}
        >
            {children}
        </MyContext.Provider>
    )
}