import ReactDOM from "react-dom/client";
import App from "App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "engine/redux";
import "./index.css";

const baseUrl: string = import.meta.env.VITE_BASE_URL;

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache({
    addTypename: false
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Provider>
  </ApolloProvider>
);