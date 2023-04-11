import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import { fetchOneArticle } from "../../store/thunks/articlesThunk";

const EditArticle = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const article = useSelector((state) => state.articles.oneArticle);

    useEffect(() => {
        dispatch(fetchOneArticle(slug));
    }, [dispatch, slug]);

    return (
        <Form
            title="Edit article"
            initialValue={article}
            mode="editMode"
            slug={slug}
        />
    );
};

export default EditArticle;
