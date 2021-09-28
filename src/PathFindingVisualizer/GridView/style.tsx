import CSS from "csstype";

export const useStyle = () => {
    const row: CSS.Properties = {
        display: "flex",
        flexDirection: "row",
    };

    const col: CSS.Properties = {
        display: "flex",
        flexDirection: "column",
    };

    return { col, row };
};
