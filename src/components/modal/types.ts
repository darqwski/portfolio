export interface IModal {
    title?: string
    message: string
    confirmText?:string;
    declineText ?:string;
    declineAction: () => void;
    confirmAction: () => void;
}
