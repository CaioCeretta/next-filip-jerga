import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import ResourceList from "@/components/ResoucreList";
import ResourceHighlight from "@/components/ResourceHighlight";

import {resources} from '../api/data';

export default function Home() {
  return (
    <>
      <Layout>
        <ResourceHighlight
          resources={resources.slice(0,2)}
        />
        <Newsletter />
        <ResourceList resources={resources.slice(2)}/>

        <Footer />
      </Layout>
    </>
  );
}
