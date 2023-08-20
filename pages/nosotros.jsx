import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de musica"}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Praesent in nisi nec odio vehicula vulputate. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Sed et arcu a justo ornare varius. Integer
              ullamcorper velit eu nulla cursus condimentum congue non neque.
            </p>
            <p>
              Sed commodo lobortis risus, id cursus felis mollis vitae. Nulla
              dapibus, tellus vitae sagittis sollicitudin, erat tellus venenatis
              metus, sit amet pulvinar lacus ligula a urna. Etiam non metus
              condimentum, convallis lacus nec, rutrum enim.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
