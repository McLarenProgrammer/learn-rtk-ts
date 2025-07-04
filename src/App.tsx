import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'

function App() {
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
            <div>
                {isLoading && <h1>Идёт загрузка...</h1>}
                {error && <h1>{error}</h1>}
                {JSON.stringify(users, null ,2)}
            </div>
        </>
    )
}

export default App
