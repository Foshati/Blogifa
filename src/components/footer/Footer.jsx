import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-4 bg-black rounded footer footer-center text-base-content">
      <div className="m-1">
        <p>
          Copyright &copy; 2024 - All right reserved by{" "}
          <a
            className="cursor-pointer hover:text-red-500"
            href="https://github.com/Foshati"
            target="_blank"
            rel="noopener noreferrer" /* Prevent tabnabbing security attack */
          >
            Foshati
          </a>
        </p>

        <span className="hidden grid-flow-col gap-4 lg:grid">
          <Link href="" className="link link-hover">
            About us
          </Link>
          <Link href="" className="link link-hover">
            Contact
          </Link>
          <Link href="" className="link link-hover">
            Jobs
          </Link>
          <Link href="" className="link link-hover">
            Press kit
          </Link>
        </span>
      </div>
    </footer>
  );
};
