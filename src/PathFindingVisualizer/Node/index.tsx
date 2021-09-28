import React from "react";
import { style } from "./style";

const NodeComponent: React.FC = () => {
    const { box } = style();
    return <div style={box}></div>;
};

export const Node = NodeComponent;
export default Node;
