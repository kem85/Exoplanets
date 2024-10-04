import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col  items-center w-screen  justify-center h-screen">
      <h1 className="text-3xl font-bold pb-4">Oops!</h1>
      <p className="pb-2 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="font-light">
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </div>
  );
}
