import heroImg from "../assets/hero.svg";
import {
  FaGithubAlt,
  FaGithubSquare,
  FaLink,
  FaLinkedin,
  FaLinkedinIn,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7x1 font-bold tracking-wider">Hi, I'm Carlos</h1>
          <h2 className="text-7x1 font-normal tracking-wider">
            Math fanatic turned Software Engineer
          </h2>
          <p>
            Focused on <strong>Full Stack Development</strong>
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            I use my experience to design, build, and deploy scalable web
            applications.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/cvinsf"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/carlosvillarrealsb"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedinIn className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCm5Pp6cgRNf98XxRR4-MF-Q"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaYoutube className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
