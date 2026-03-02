import React from "react";
import { CanvasComponent } from "@/types/canvas";
import { ComponentMapper } from "./ComponentMapper";
import { useLayoutStore } from "@/store/useLayoutStore";

interface RenderEngineProps {
    layout: CanvasComponent[];
}


export const RenderEngine: React.FC<RenderEngineProps> = ({ layout }) => {
    const selectedId = useLayoutStore ((state) => state.selectedId);
    const setSelectedId = useLayoutStore((state) => state.setSelectedId);

    return (
        <div className="flex flex-col gap-4">
            {layout.map((element) => {

                const isSelected = selectedId === element.id;

                return (
                    <div
                        key={element.id}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedId(element.id);
                        }}
                        className={`
                            relative transition-all duration-200 cursor-pointer border-2
                            ${isSelected ? "border-blue-500" : "border-transparent hover:border-blue-200"}
                        `}
                    >
                        <ComponentMapper element={element} />
                    </div>
                );
            })}
        </div>
    );
};