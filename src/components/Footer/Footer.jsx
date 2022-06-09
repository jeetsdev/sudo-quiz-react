import { BsGithub, BsTwitter, BsLinkedin, BsBagFill } from "react-icons/bs"
import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="main__footer-sec">
            <section className="footer__sec-right center__flex">
                <a href="https://github.com/jeetsdev" target="_blank" rel='noreferrer'>
                    <BsGithub className="text-mid footer__icon  margin__lr-8px" />
                </a>
                <a href="https://twitter.com/jeetsdev" target="_blank" rel='noreferrer'>
                    <BsTwitter className="text-mid footer__icon margin__lr-8px" />
                </a>
                <a href="https://www.linkedin.com/in/jeetsdev/" target="_blank" rel='noreferrer'>
                    <BsLinkedin className="text-mid footer__icon  margin__lr-8px" />
                </a>
                <a href="https://jeetsdev.netlify.app/" target="_blank" rel='noreferrer'>
                    <BsBagFill className="text-mid footer__icon  margin__lr-8px" />
                </a>
            </section>
        </footer>
    )
}