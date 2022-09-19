import React, { ReactNode } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.interface";

//Styles
import "./ErrorBoundary.styles.scss";

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  public static getDerivedStateFromError = (err: Error): ErrorBoundaryState => {
    return { hasError: true, errorMessage: err.toString() };
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    const { hasError, errorMessage } = this.state;

    return !hasError ? (
      this.props.children
    ) : (
      <div className="error">
        <h2 className="error__header">Uh oh, something went wrong!</h2>
        <p className="error__message">{errorMessage}</p>
      </div>
    );
  }
}

export default ErrorBoundary;
