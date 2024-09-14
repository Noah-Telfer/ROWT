import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)
    

    const handleLogin = () => {
        
        userContext.setUser({name: {first: "Noah",last: "Telfer"},email: "noahtelfer@fakeGmail.com"})
        userContext.toggleLogin()    
        
    }
    const handleLogout = () => {
        userContext.setUser(null)
        userContext.toggleLogin()  
    } 
    
    return (
        
        <div> 
            {userContext.loggedIn?
                <div>
                    <div> User Name Is {userContext?.user?.name.first} {userContext?.user?.name.last}</div>
                    <div> user Email Is {userContext?.user?.email} </div>
                    <button onClick = {handleLogout}>Logout</button>
                    <script>console.log(userContext)</script>
                </div>:
                <button onClick={handleLogin}>Login</button>
             }        
        </div>
    )
  
}