import List from "./components/list/list";
import Chat from "./components/chat/chat";
import Detail from "./components/detail/detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
const App = () => {
  const user = false;

  return (
    <div className="container">
      {/* If logged in, show: */}
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        // Else show:
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
