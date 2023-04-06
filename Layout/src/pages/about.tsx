import Layout from "@/components/Layout";

const MyTest = ({ children }: any) => {
  return (
    <>
      <h1>My Test Component</h1>
      {children}
    </>
  );
};

export default function About() {
  return (
    <>
      <Layout>

        <MyTest>
          <h1>I'm about page</h1>
          <h2>Hello World</h2>
          <h3>Hi There</h3>
        </MyTest>
      </Layout>
    </>
  );
}
