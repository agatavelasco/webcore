import { GetServerSideProps } from "next";

export default function User() {
  return (
    <h1>Usuários</h1>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://192.168.0.20:8001/users`)
  const data = await res.json()

  console.log(data)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      
    }, // will be passed to the page component as props
  }
}