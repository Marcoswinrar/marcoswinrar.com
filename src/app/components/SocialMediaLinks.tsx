import Link from "next/link"
import { Github, Linkedin } from "./Icons"

const SocialMediaLinks = () => {
  return (
    <nav className="mx-auto mb-2 xl:my-6 flex justify-end xl:justify-center">
      <Link className="mx-3" target="_blank" href={"https://github.com/Marcoswinrar"}>
        <Github />
      </Link>
      <Link className="mx-3" target="_blank" href={"https://www.linkedin.com/in/marcosmew96/"}>
        <Linkedin />
      </Link>
    </nav>
  )
}

export default SocialMediaLinks