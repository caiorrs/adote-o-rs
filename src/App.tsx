import { CssBaseline, ThemeProvider } from "@mui/material";
import { pagesWithComponents } from "./pages/pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { theme } from "./theme";

const router = createBrowserRouter([
  ...pagesWithComponents.map((page) => ({
    path: page.path,
    element: page.component,
    errorElement: <ErrorPage />,
  })),
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
