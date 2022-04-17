const Notification = ({ message }) => {

    if (message === null) {
        return null
    }
    console.log(message)
    return (
        <div>
            <em>{message}</em>
        </div>
    )
}

export default Notification