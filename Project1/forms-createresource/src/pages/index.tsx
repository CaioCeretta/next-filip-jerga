import { useEffect } from "react";

import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import ResourceList from "@/components/ResourceList";
import ResourceHighlight from "@/components/ResourceHighlight";

// import {resources} from '../api/data';



export default function Home({resources}: any) {

// useEffect(() => {
  //   // This fetch would occur without an error on the server side, but on the
  //   // browser like this it will return a CORS error
  //   const resData = fetch('http://localhost:3333/api/resources');

  // }, [])

  // This way we will send the request to the next api communicate with the
  // node
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/resources');
  // }, [])
  
  return (
    <>
      <Layout>
        <ResourceHighlight
          resources={resources.slice(0,5)}
        />
        <Newsletter />
        <ResourceList resources={resources.slice(2)}/>

        <Footer />
      </Layout>
    </>
  );
}

/*These will be handled from the nextjs library, both of them return props that
are going to be provided in the props of the function, the differences will be
explained on top of the functions*/


// This function will be executed at the build time, and it's called only once

// export async function getStaticProps () {
//   const resData = await (await fetch('http://localhost:3000/api/resources'));  
//   const res = await resData.json();

//   return {
//     props: {
//       resources: res
//     }
//   }
// }


export async function getServerSideProps () {
  const resData = await fetch('http://localhost:3333/api/resources');
  const res = await resData.json();

  return {
    props: {
      resources: res
    }
  }
}
