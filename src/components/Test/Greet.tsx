type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}



export const Greet = (props: GreetProps) => {
    
    return (
        <div>
            <h2>{
                    props.isLoggedIn ? 'Welcome ${props.name}! You have ${props.messageCount} unfinished Jira Tasks' 
                    : 'Welcome Random user'
                } 
                
            </h2>
        </div>
    )
}