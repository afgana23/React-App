function Student(props)


{
    console.log(props)
    return(
        <div>
            <h1>Student componrent</h1>
            <p>{props.a}</p>
            <p>{props.name}</p>

        </div>
    )
}
export default Student