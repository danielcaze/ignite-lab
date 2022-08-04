import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from './Router'

export function App() {
  // CMS = COntent Management System
  // Headless CMS: Painel de ADMIN (dados fornecidos através de uma API)
  // Definir estilos por classe se chama "Interface Declarativa"

  // GraphQL
  // query / mutation
  // query = buscar dados
  // mutation = criar, alterar ou deletar dados
  // underfetching e overfetching (back retornar mais ou menos dados do que o necessário)

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};