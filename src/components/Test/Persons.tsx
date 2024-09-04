type PersonsProps = {
    nameList: {
        first: string
        last: string
    }[]
}


export const PersonList = (props: PersonsProps) => {
    return (
        <div>
            {props.nameList.map(name => {
                return (
                    <h2 key = {name.first}>
                        {name.first} {name.last}
                    </h2>
                )
            })}
        </div>
    )
}