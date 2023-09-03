import Login from './Components/Login';
import LoginProvider from './Components/Context';
import Auth from './Components/Auth';
export default function App(props) {
    return (
        <LoginProvider>
            <Login />
            <Auth action='readUser'>
                <div >
                    <h2>list of items</h2>
                    <ul>
                        <li>item1</li>
                        <li>item2</li>
                        <li>item3</li>
                    </ul>
                </div>
            </Auth>
            <Auth action='update'>
                <button>update</button>
            </Auth>
            <Auth action='create'>
                <button>create</button>
            </Auth>
            <Auth action='delete'>
                <button>delete</button>
            </Auth>
        </LoginProvider>
    )
}