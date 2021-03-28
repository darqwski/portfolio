export interface ISnackbarContext {
    addSnackBar: { text: string; timeout: number };
    removeSnackbar: (id: string) => void;
}

export interface ISnackbarItem {
    text: string;
    timeout: number;
    id: string;
}
