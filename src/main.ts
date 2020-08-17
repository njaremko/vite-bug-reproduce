import { createApp } from "vue";
import App from "./App.vue";
import type {} from "vite";

// BUG 1: This fails with Uncaught SyntaxError: import not found: SubscriptionClient
import { SubscriptionClient } from "subscriptions-transport-ws";

// BUG 2: This fails with Uncaught SyntaxError: import not found: DefaultApolloClient
import { DefaultApolloClient } from "@vue/apollo-composable";

// BUG 3: Replace the line above with the line below and you'll get Uncaught SyntaxError: import not found: default
import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { WebSocketLink } from "@apollo/link-ws";

const app = createApp(App);

const buildClient = () => {
  const client = new SubscriptionClient("", {
    reconnect: true,
    timeout: 30000,
  });
  const link = new WebSocketLink(client);
  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
};

app.provide(DefaultApolloClient, buildClient());

app.mount("#app");
