import React, { useState, useEffect } from "react";
import { Node } from "../Node";
import { useStyle } from "./style";
import { Props } from "./props";

const GridViewComponent: React.FC<Props> = (props) => {
    const [grid, setGrid] = useState<JSX.Element[][]>([]);
    const { col, row } = useStyle();

    useEffect(() => {
        const gridValue = [];
        for (let i = 0; i < 10; ++i) {
            const gridColumn = [];
            for (let j = 0; j < 10; ++j) {
                gridColumn.push(<Node key={`${i} ${j}`} />);
            }
            gridValue.push(gridColumn);
        }
        setGrid(gridValue);
    }, []);

    const getGrid = () => {
        return grid.map((column, idx) => {
            return (
                <div key={idx} style={col}>
                    {column.map((node) => {
                        return node;
                    })}
                </div>
            );
        });
    };

    return (
        <div>
            <div style={row}>{getGrid()}</div>
        </div>
    );
};

export const GridView = GridViewComponent;
export default GridView;
