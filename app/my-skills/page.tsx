import { Metadata } from "next";
import '@/app/my-skills/style.css';

export const metadata: Metadata = {
  title: "My Skills"
}

export default function Skills() {
  return (
    <main>
      <h3>So, what can I actually do?</h3>
      <h6>I am a full-stack web developer, which means I can develop and create the front-end and back-end of web applications. I can also develop AI models and inference systems, and know server management, hosting, and server infrastructure.</h6>
      <h3>What skills and tools I do use?</h3>
      <h6>Here's a list of the skills I can utilize in projects:</h6>
      <ul>
        <li>Web Development - TypeScript, JavaScript, React, Next.js, Node.js</li>
        <li>API services and Back-ends - Python, Django, FastAPI, Flask, SQL</li>
        <li>AI models and Machine Learning systems - Python, Pytorch, Tensorflow/Keras, Sci-Kit Learn</li>
        <li>Data Science and Automation - Python, NumPy, Pandas, Matplotlib, Seaborn</li>
        <li>Server Infrastructure, Deployment, and Hosting - Linux, Cloudflare, Kubernetes, Docker</li>
        <li>Development Process - Git, Docker, CI-CD pipelines</li>
      </ul>
      <a href="/projects">See my actual work →</a>
    </main>
  );
}