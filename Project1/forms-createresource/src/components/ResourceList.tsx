import Link from "next/link";
import React from "react";


interface IResource {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  priority: number;
  active: boolean;
  timeToFinish: number;
}

interface IResourcesProps {
  resources: IResource[];
}

export default function ResourceList({ resources }: IResourcesProps) {
  const renderResources = () =>
    resources.map((resource) => (
      <div key={resource.id} className="column is-5 is-offset-1 ">
        <div className="content is-medium">
          <h2 className="subtitle is-5 has-text-grey"></h2>
          <h1 className="title has-text-black is-3">{resource.title}</h1>
          <p className="has-text-dark">{resource.description}</p>
          <Link className="button is-link" href={`/resources/${resource.id}`}>
            Info
          </Link>
        </div>
      </div>
    ));

  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline is-variable is-8">
              {renderResources()}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
