import '../css/Notification.css'

const Notification = ({ message }) => {

    if (message === null) {
        return null
    }

    return (
        <div className='top-notification'>
            <em>{message}</em>
        </div>
    )
}

export default Notification