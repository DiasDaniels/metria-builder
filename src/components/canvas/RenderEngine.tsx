import React from "react";
import { CanvasComponent } from "@/types/canvas";
import { ComponentMapper } from "./ComponentMapper";

interface RenderEngineProps {
    layout: CanvasComponent[];
}


export const RenderEngine: React.FC<RenderEngineProps> = ({ layout }) => {
    return (
        <div className="flex flex-col gap-4">{layout.map((element) => (
            <ComponentMapper key={element.id} element ={element}/>
        ))}
        </div>
    );
};