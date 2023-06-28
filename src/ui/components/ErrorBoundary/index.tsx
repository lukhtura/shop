import { Component, ReactNode } from "react";
import ErrorMessage from "ui/components/ErrorMessage";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
    this.setState({
      error: true
    });
  }

  render(): ReactNode {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;