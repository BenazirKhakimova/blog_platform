import React from "react";
import { Alert } from "antd";
import styles from "./ErrorBoundry.module.scss";

export default class ErrorBoundry extends React.Component {
    state = {
        error: false,
    };

    componentDidCatch(error) {
        this.setState({ error });
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;
        if (error) {
            return (
                <div className={styles.error}>
                    <Alert
                        message="Ощибка"
                        description="Что-то пошло не так повторите попытку!"
                        type="error"
                        showIcon
                    />
                </div>
            );
        }

        return children;
    }
}
