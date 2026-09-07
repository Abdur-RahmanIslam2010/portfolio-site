import '@/app/style.css';
import '@/public/kubernetes_logo.svg';
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <h1 className="title">Hello!</h1>
      <h5>I'm Abdur-Rahman Islam, a software developer. Welcome to my website!</h5>
      <h3>Want to see what I can build?</h3>
      <div className="builds-cards">
        <div className="card">
          <span className={jetbrainsMono.className} id='code-icon'>{"</>"}</span>
          <div className="card-body">
            <h5 className="card-title">Web Development</h5>
            <p className="card-text">Websites, APIs, Back-ends, Front-ends...</p>
          </div>
        </div>
        <div className="card">
          <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#d1d1d1"><path d="M360-360v-240h240v240H360Zm80-80h80v-80h-80v80Zm-80 320v-80h-80q-33 0-56.5-23.5T200-280v-80h-80v-80h80v-80h-80v-80h80v-80q0-33 23.5-56.5T280-760h80v-80h80v80h80v-80h80v80h80q33 0 56.5 23.5T760-680v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T680-200h-80v80h-80v-80h-80v80h-80Zm320-160v-400H280v400h400ZM480-480Z"/></svg>
          <div className="card-body">
            <h5 className="card-title">AI & Data Science</h5>
            <p className="card-text">AI and machine learning models, price prediction, data visualization...</p>
          </div>
        </div>
        <div className="card">
          <img src="kubernetes_logo.svg" alt="kub" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Servers & Infrastructure</h5>
            <p className="card-text">Experience in deployment, hosting, and server management</p>
          </div>
        </div>
      </div>
      <h3>Here's what I'm doing now</h3>
      <h6>I'm currently working on more portfolio projects and develop my infrastructure further. I'm gonna start freelancing soon.</h6>
      <h3>Have something to build?</h3>
      <p>Go ahead and <a href="/contact">Contact Me!</a></p>
    </main>
  );
}