import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'
import PostContainer from "./components/PostContainer"

function App() {
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    // const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <>
            <div>
                {/* {isLoading && <h1>Идёт загрузка...</h1>}
                {error && <h1>{error}</h1>}
                {JSON.stringify(users, null ,2)} */}
                <PostContainer />
            </div>
        </>
    )
}

export default App
