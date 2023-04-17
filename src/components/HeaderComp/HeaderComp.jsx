import React, { useContext } from "react";
import { ButtonStyled, HeaderStyled } from "../../Styles";
import logo from "../../assets/logo-resized.png";
import MobileMenu from "../../assets/icon-hamburger.svg"
import MobileMenuClose from "../../assets/icon-close.svg"
import { ContextProvider } from "../../context/Context";
import "./Header.css"
import { motion } from "framer-motion";

export default function HeaderComp() {

	const { isMobile, setIsMenuOpen, menuOpen } = useContext(ContextProvider)

	const handleMenuOpen = () => {
		setIsMenuOpen(!menuOpen)
	}

	return (
		<HeaderStyled data-aos="fade-down" data-aos-duration="1000">
			{isMobile ? (
				<>
					<div className="mobile-menu_button">
						<div className="logo">
							<img src={logo} alt="Logo" />
						</div>
						<div onClick={handleMenuOpen} className="open-menu_mobile">
							<img src={MobileMenu} alt="" />
						</div>
					</div>
					{menuOpen && (
						<motion.div
							initial={{ opacity: 0, x: 100, originX: 0 }}
							animate={{ opacity: 1, x: 0, originX: 1 }}
							transition={{
								type: "ease-in",
                                delay: 0.2,
                                duration: 0.2,
							}}

							className="mobile-menu">
							<div onClick={handleMenuOpen} className="menu-close_button">
								<img src={MobileMenuClose} alt="" />
							</div>
							<div className="navbar">
								<ul>
									<a href="#aboutme">
										<li>Sobre</li>
									</a>
									<a href="#projects">
										<li>Projetos</li>
									</a>
									<a href="#contact">
										<li>Contato</li>
									</a>
									<ButtonStyled>Currículo</ButtonStyled>
								</ul>
							</div>
						</motion.div>
					)}
				</>
			) : (
				<>
					<div className="logo">
						<img src={logo} alt="Logo" />
					</div>
					<div className="navbar">
						<ul>
							<a href="#aboutme">
								<li>Sobre</li>
							</a>
							<a href="#projects">
								<li>Projetos</li>
							</a>
							<a href="#contact">
								<li>Contato</li>
							</a>
							<ButtonStyled>Currículo</ButtonStyled>
						</ul>
					</div>
				</>
			)}

		</HeaderStyled>
	);
}
