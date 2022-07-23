import { gql, useQuery } from "@apollo/client"
// import { useEffect } from "react"
// import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  // CMS = COntent Management System
  // Headless CMS: Painel de ADMIN (dados fornecidos através de uma API)
  // Definir estilos por classe se chama "Interface Declarativa"

  // GraphQL
  // query / mutation
  // query = buscar dados
  // mutation = criar, alterar ou deletar dados
  // underfetching e overfetching (back retornar mais ou menos dados do que o necessário)

  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data);
  //   });
  // }, []);

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  );
};