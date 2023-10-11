import React ,{useContext} from 'react'
import userContext from './context/usercontext'

export default function varifiedUser() {
    const {user} = useContext(userContext);
if(!user) return <div> Please Login First</div>

return <div>Hello! {user}</div>
}
