import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)
    

    const handleLogin = () => {
        
        userContext.setUser({name: {first: "Noah",last: "Telfer"},email:{email: "noahtelfer@fakeGmail.com"}})
            
        
    }
    const handleLogout = () => {
        userContext.setUser(null)  
    } 
    
    return (
        
        <div> 
            {userContext === null?
                <button onClick={handleLogin}>Login</button>:
                
                <div>
                    <div> User Name Is {userContext?.user?.name.first} {userContext?.user?.name.last}</div>
                    <div> user Email Is {userContext?.user?.email.email} </div>
                    <button onClick = {handleLogout}>Logout</button>
                    <script>console.log(userContext)</script>
                </div>
            
             }        
        </div>
    )
  
}