import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin as AntSpin } from "antd";
import styles from "./Spin.module.scss";

const Spin = () => {
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );
    return (
        <div className={styles.spin}>
            <AntSpin indicator={antIcon} />
        </div>
    );
};

export default Spin;
