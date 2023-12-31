import { useRouteError } from "react-router-dom";

export const PageNotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.toString()}</i>
      </p>
    </div>
  );
};
