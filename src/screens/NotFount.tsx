import { useRouteError } from "react-router-dom";

export default function PageNotFoundScreen() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Page not found !!
      </p>
    </div>
  );
}