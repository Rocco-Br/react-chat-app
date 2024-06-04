import Userinfo from "./userInfo/Userinfo"
import ChatList from "./chatlist/ChatList"
import "./list.css"
const List = () => {
    return (
        <div className='list'>
            <Userinfo />
            <ChatList />
        </div>
    )
}

export default List