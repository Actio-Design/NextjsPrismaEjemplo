// /pages/api/movies.js
import {PrismaClient} from "@prisma/client"
export {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

export default function listado ({ articulos }) {

    return (
        <>
        <h2>dddd</h2>
        </>
    )
}

export const getServerSideProps = async () => {
    const prisma = new PrismaClient();
    const articulos = await prisma.noticias.findMany({
        select:{titulo:true}
    });
    return { props: { articulos } };
  }
