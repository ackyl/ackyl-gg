import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about">
      <h1>Hello there</h1>

      <div className="about-intro">
        <p>
          This website is managed by <strong>Ackyl</strong>.
        </p>
        <p>
          I'm now currently working as a <strong>Product Designer</strong> at{" "}
          <strong>Traveloka</strong>.
        </p>
        <p>
          I love to talk about anything engaging, immersive, interactive or
          modular.
        </p>
      </div>

      <div className="button">
        <p>Instagram</p>
        <a href="https://instagram.com/liminalbeams" target="_blank" />
        <img src="/right-arrow.svg" />
      </div>

      <div className="button">
        <p>Linkedin</p>
        <a
          href="https://www.linkedin.com/in/dimas-ackyl-mohamad-6903a4128/"
          target="_blank"
        />
        <img src="/right-arrow.svg" />
      </div>

      <div className="button">
        <p>Dribbble</p>
        <a href="https://www.dribbble.com/ackyl" target="_blank" />
        <img src="/right-arrow.svg" />
      </div>
    </div>
  );
}
