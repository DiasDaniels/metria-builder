import React from 'react';
import { CanvasComponent } from '@/types/canvas';
import { TextComponent } from './TextComponent';

const COMPONENT_MAP: Record<string, React.FC<{config: CanvasComponent} >> = {text: TextComponent};

interface ComponentMapperProps {
    element: CanvasComponent;
}

export const ComponentMapper: React.FC<ComponentMapperProps> = ({element}) => {
    const SelectedComponent = COMPONENT_MAP[element.type];
    if (!SelectedComponent){
        return (
            <div className='p-4 border-2 border-dashed border-red-400 text-red-600 bg-red-50 rounded'>
                Atenção: O componente "{element.type}" ainda não foi implementado no sistema!
            </div>
        );
    }
    return <SelectedComponent config={element}/>;
};