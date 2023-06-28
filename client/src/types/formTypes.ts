export type SubmitHandler<T> = (data: T) => void;

export type FormField = {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
};