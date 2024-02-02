
export interface MediumInterface {
    dargEnabled: boolean,
    dropEnabled: boolean
}
export interface DragEvent {
    medium: MediumInterface,
    node: HTMLElement,
    clientX?: number,
    clientY?: number,
    offset?: {
        x: number, 
        y: number
    }
}

export interface DropEvent {
    source: {
        medium: MediumInterface,
        node: HTMLElement,
        clientX?: number,
        clientY?: number,
        offset?: {
            x: number, 
            y: number
        }
    },
    destination: {
        medium: MediumInterface,
        node: HTMLElement,
        clientX?: number,
        clientY?: number
    }
}
