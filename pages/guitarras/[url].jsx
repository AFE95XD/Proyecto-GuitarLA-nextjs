// import { useRouter } from "next/router";

export default function Producto({ guitarra }) {
  //   const router = useRouter();
  //   console.log(router.query);
  console.log(guitarra[0].attributes.nombre);
  return <div>[url]</div>;
}

export async function getStaticPaths() {
  //   console.log(url);
  const respuesta = await fetch(`${process.env.API_URL}/gitarras`);
  const { data } = await respuesta.json();
  console.log(data);

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  //   console.log(url);
  const respuesta = await fetch(
    `${process.env.API_URL}/gitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();
  console.log(data);

  return {
    props: { guitarra },
  };
}

// export async function getServerSideProps({ query: { url } }) {
//   //   console.log(url);
//   const respuesta = await fetch(
//     `${process.env.API_URL}/gitarras?filters[url]=${url}&populate=imagen`
//   );
//   const { data: guitarra } = await respuesta.json();
//   //   console.log(data);

//   return {
//     props: { guitarra },
//   };
// }
