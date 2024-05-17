import { useRouteError } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <PageWrapper>
      <>
        <h1>Oops!</h1>
        <p>Desculpe, ocorreu um erro inesperado!</p>
        {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}
      </>
    </PageWrapper>
  );
}
