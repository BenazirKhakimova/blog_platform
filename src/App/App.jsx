import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import ArticlesList from "../pages/ArticlesList/ArticlesList";
import Layout from "../components/Layout/Layout";
import Article from "../pages/Article/Article";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import { setUser } from "../store/slices/userSlice";
import Profile from "../pages/Profile/Profile";
import ReqairAuth from "../hoc/ReqairAuth";
import Page404 from "../pages/Page404/Page404";
import CreateArticle from "../pages/CreateArticle/CreateArticle";
import EditArticle from "../pages/EditArticle/EditArticle";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch(setUser(user));
        }
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<ArticlesList />} />

                <Route path="articles" element={<ArticlesList />} />
                <Route path="articles/:slug" element={<Article />} />
                <Route
                    path="new-article"
                    element={
                        <ReqairAuth>
                            <CreateArticle />
                        </ReqairAuth>
                    }
                />

                <Route path="articles/:slug/edit" element={<EditArticle />} />

                <Route path="signUp" element={<SignUp />} />
                <Route path="signIn" element={<SignIn />} />

                <Route
                    path="profile"
                    element={
                        <ReqairAuth>
                            <Profile />
                        </ReqairAuth>
                    }
                />
            </Route>

            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}

export default App;
