import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";

export default function ResourceDetail({ resource }: any) {
  const router = useRouter();

  // if(router.isFallback) {
  //   return <div>Loading Data!</div>
  // }

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}

//Get static paths is needed when used getStaticProps in a dynamic page because you need to know all the resource pages that will need to be created beforehand
export async function getStaticPaths() {
  const resData = await fetch('http://localhost:3333/api/resources');
  const res = await resData.json();
  const paths = res.map((resource: any) => (
    {
      params: { id: resource.id }
    }
  ))

  return {
    paths,
    //fallback false means that non existent routes shall resolve into a 404 page
    // fallback: false
    //fallback: true will give server a chance to fatch the data from the static props with the specified params.id we
    //are specifying in the url
    fallback: false
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext) {


  if (params) {

    const dataRes = await fetch(
      `http://localhost:3333/api/resources/${params.id}`
    );
    const data = await dataRes.json();

    return {
      props: {
        resource: data,
      },
      revalidate: 1
    };
  }

  return {
    props: {
      resource: null,
    },
    
  };
}


/*getInitialProps is executed both on the server and on the client, so it will load the data being request and, if not authorized, it will also return a cors error in the browser*/
// ResourceDetail.getInitialProps = async ({query}: any) => {
//   console.log('Called on the server')
//   const dataRes = await fetch(
//     `http://localhost:3333/api/resources/${query.id}`
//   );
//   const data = await dataRes.json();

//   return {
//         resource: data
//     };
//   }


// export async function getServerSideProps({
//   params,
// }: GetServerSidePropsContext) {
//   console.log(params);

//   const dataRes = await fetch(
//     `http://localhost:3333/api/resources/${params.id}`
//   );
//   const data = await dataRes.json();

//   if (params) {
//     return {
//       props: {
//         resource: data,
//       },
//     };
//   }

//   return {
//     props: {
//       resource: null,
//     },
//   };
// }

