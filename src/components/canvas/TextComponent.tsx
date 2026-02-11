import React from "react";
import { CanvasComponent } from "@/types/canvas";

interface TextComponentProps{
    config: CanvasComponent;
}

export const TextComponent: React.FC<TextComponentProps> = ({config}) => {
    const {content} = config.props;
    const{
        textColor = '#000000',
        fontsize = '16px',
        padding = '0px',
        backgroundColor = 'transparent'
    } = config.styles;
  
    return(
        <p 
        style = {{
            color: textColor,
            fontSize:fontsize,
            padding: padding,
            backgroundColor: backgroundColor,
            transition: 'all 0.2s ease-in-out'
        }} >
            {content || 'Clique para editar'}
        </p>
    );
};