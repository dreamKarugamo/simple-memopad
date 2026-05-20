import React, { useState } from "react";

const styles = {
    app: {
        width: "60vw",
        height: "50vh",
        margin: "100px auto",
    },
    h1: {
        fontSize: "30px",
        textAlign: "center" as const,
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column" as const,
    },
    textarea: {
        fontSize: "20px",
        width: "100%"
    },
    button: {
        display: "block",
        width: "200px",
        height: "50px",
        margin: "40px auto 0",
    },
};

const App: React.FC = () => {
    const [memo, setMemo] = useState<string>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("memo");
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    console.error("データのパースに失敗しました：", e);
                }
            }
        }
        return '';
    });

    const handleKeep = () => {
        const save = memo;
        localStorage.setItem("memo", JSON.stringify(save));
    };

    return (
        <div style={styles.app}>
            <h1 style={styles.h1}>簡易メモ帳</h1>
            <div style={styles.container}>
                <textarea
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    rows={20}
                    style={styles.textarea}
                />
                <button onClick={handleKeep} style={styles.button}>
                    保存
                </button>
            </div>
        </div>
    );
};

export default App;
