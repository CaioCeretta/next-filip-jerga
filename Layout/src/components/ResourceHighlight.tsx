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
  createdAt: date;
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
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>
                      {resource.description}
                    </p>
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
