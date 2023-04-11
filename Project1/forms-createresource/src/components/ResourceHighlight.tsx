import React from "react";
import Link from 'next/link';

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

interface IResourcesHighlightProps {
  resources: IResource[];
}

export default function ResourceHighlight({
  resources,
}: IResourcesHighlightProps) {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {resources.map((resource) => (
            <section key={resource.id} className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4"></h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>
                      {resource.description}
                    </p>
                    <Link className="button" href={`/resources/${resource.id}`}>
                      Info
                    </Link>


                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
