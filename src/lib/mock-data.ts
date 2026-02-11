import { CanvasComponent } from "@/types/canvas";

export const MOCK_LAYOUT: CanvasComponent[] = [
    {
        id: '1',
        type: 'text',
        props: {content: 'Primeiro'},
        styles:{
            textColor:'#1e293b',
            fontsize:'24px',
            padding: '10px'
        }
    },
    {
        id:'2',
        type: 'text',
        props: {content:'Segundo'},
        styles: {
            textColor: '#64748b',
            fontsize:'16px',
            padding:'5px'
        }
    }
];