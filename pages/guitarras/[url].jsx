// import { useRouter } from "next/router";

import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";

export default function Producto({ guitarra }) {
  //   const router = useRouter();
  //   console.log(router.query);
  // console.log(guitarra[0].attributes.nombre);
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;
  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select id="cantidad">
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  //   console.log(url);
  const respuesta = await fetch(`${process.env.API_URL}/gitarras`);
  const { data } = await respuesta.json();

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
  console.log(guitarra);

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
