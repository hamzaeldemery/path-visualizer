import React from "react";
import { GridView } from "./GridView";

const PathFindingVisualizer: React.FC = () => {
    return (
        <div>
            <GridView />
        </div>
    );
};

export const PathVisualizer = PathFindingVisualizer;
export default PathFindingVisualizer;
