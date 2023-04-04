import { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({children}) =>{
    const initialState ={
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    //get search results
    const searchUsers = async (text) =>{
        setLoading()
        deleteUsers()
        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)

        const {items} = await response.json()
        
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    //set loading
    const setLoading = () => dispatch({type: 'SET_LOADING'})
    //clear users from the state
    const deleteUsers = () => dispatch({type: 'DELETE_USERS'}) 

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        deleteUsers,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext