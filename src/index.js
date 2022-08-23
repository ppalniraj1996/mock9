import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ChakraProvider } from "@chakra-ui/react";
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider as Providers } from "react-alert";

const theme = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Providers template={AlertTemplate} {...theme}>
          <App />
        </Providers>
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
