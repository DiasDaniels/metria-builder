export type ComponentType = 'text' | 'button' | 'container';

export interface CanvasComponent {
    id: string;   //UUID único para cada componente
    type: ComponentType;   //Tipo do componente
    props: Record <string, any>; //Conteúdo do componente
    styles: {
        backgroundColor?: string;
        textColor?: string;
        padding?: string;
        fontsize?: string;
        borderRadius?: string;
    };
    children?: CanvasComponent[];
}