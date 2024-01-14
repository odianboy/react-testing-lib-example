import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {AboutPage} from "../pages/AboutPage";
import {Users} from "../components/users/Users";
import {UserDetailPage} from "../pages/UserDetailPage";
import {ErrorPage} from "../pages/ErrorPage";
import {HelloWorld} from "../pages/HelloWorld";
import UsersForTest from "../components/usersForTest/UsersForTest";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />}></Route>
            <Route path={'/hello'} element={<HelloWorld />}></Route>
            <Route path={'/about'} element={<AboutPage />}></Route>
            <Route path={'/users'} element={<Users />}></Route>
            <Route path={'/users-test'} element={<UsersForTest />}></Route>
            <Route path={'/users/:id'} element={<UserDetailPage />}></Route>
            <Route path={'/*'} element={<ErrorPage />}></Route>
        </Routes>
    )
}

export default AppRouter;