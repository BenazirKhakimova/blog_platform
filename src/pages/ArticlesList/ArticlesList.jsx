import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ArticlesList.module.scss";
import { setCurrentPage } from "../../store/slices/articlesSlice";
import Pagination from "../../components/Pagination/Pagination";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { fetchArticles } from "../../store/thunks/articlesThunk";
import Spin from "../../components/Spin/Spin";

const ArticlesList = () => {
    const dispatch = useDispatch();
    const { articles, status } = useSelector((state) => state.articles);

    const [page, setPage] = useState(1);

    const offset = (page - 1) * 20;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch(fetchArticles({ offset, token: user.user.token }));
        } else {
            dispatch(fetchArticles({ offset }));
        }
    }, [dispatch, offset]);

    useEffect(() => {
        dispatch(setCurrentPage(page));
    }, [dispatch, page]);

    let content = null;

    if (status === "loading") {
        content = <Spin />;
    } else if (status === "resolved") {
        content = articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
        ));
    }

    return (
        <>
            <div className={styles.articles__wrapper}>{content}</div>
            {articles.length === 0 || status === "loading" ? null : (
                <Pagination setPage={setPage} page={page} />
            )}
        </>
    );
};

export default ArticlesList;
