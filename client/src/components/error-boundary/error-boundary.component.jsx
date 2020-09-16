import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageText,
  ErrorImageContainer,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrls="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this image is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
