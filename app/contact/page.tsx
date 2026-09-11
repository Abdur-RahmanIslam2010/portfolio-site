import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me"
}

export default function Contact() {
  return (
    <main>
      <h3>Have a certain project in mind?</h3>
      <h6>Feel free to contact me via email!</h6>
      <p>Email: <a href="mailto:abdelrahmanislam116@email.com">abdelrahmanislam116@gmail.com</a></p>
      <h6>And make sure to check out my Github page to see my projects in more detail</h6>
      <p>Github: <a href="https://github.com/Abdur-RahmanIslam2010">https://github.com/Abdur-RahmanIslam2010</a></p>
    </main>
  );
}