import React from "react";

function ErrorPage({ message }: { message: string | null | undefined }) {
  return <h1>{message}</h1>;
}

export default ErrorPage;
