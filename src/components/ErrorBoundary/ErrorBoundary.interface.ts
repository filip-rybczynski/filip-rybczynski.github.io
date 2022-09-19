import { ReactNode } from "react";

export interface ErrorBoundaryState {
    hasError: boolean,
    errorMessage: null | string,
}

export interface ErrorBoundaryProps {
    children?: ReactNode,
}