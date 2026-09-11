import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
}

export default function About() {
  return (
    <main>
      <h3>Let me introduce myself</h3>
      <h6>I am Abdur-Rahman Islam, a software developer. I build websites, APIs, and AI models. I enjoy the development of projects that contribute to our society, as well as going through problems and solving them.</h6>
      <h3>What am I doing while working on your projects?</h3>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Avoiding Over-Engineering</h5>
            <p className="card-text"> I always focus on getting done with problems, a base user interface design, or primary functionality first. I polish later, and I don't do it in excess.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Learning While Working</h5>
            <p className="card-text">This is one of my biggest strengths. Even if I am already capable, I still tone my skills through your projects, and it really helps improve your project's quality and obviously my experience.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Using My Own Infrastruture</h5>
            <p className="card-text">I have a server and domain ready to help me show you progress, MVP, or the final product, and they enhance the development process greatly.</p>
          </div>
        </div>
      </div>
      <h3>Where am I heading in software development?</h3>
      <h6>For now, I'm working on my portfolio, but I'm also working on my infrastructure, UI designing skills, and making more projects in general, as well as learning new technologies and frameworks.</h6>
      <h3>So, ready to get in touch?</h3>
      <h6>Go check out the <a href="/contact">contact page</a></h6>
    </main>
  );
}