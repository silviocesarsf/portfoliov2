import React from "react";
import { Container, FooterStyled } from "../../Styles";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
	return (
		<FooterStyled>
			<Container
				display="flex"
				align="center"
				justify="center"
				gap="1rem"
			>
				<div className="left-footer">
					Desenvolvido por Silvio César 2023
				</div>
				<div className="right-footer">
					<a href="https://github.com/silviocesarsf?tab=repositories" target="_blank">
						<FiGithub className="icon" />
					</a>
					<a href="https://www.linkedin.com/in/silvio-c%C3%A9sar-976788229/" target="_blank">
						<SlSocialLinkedin className="icon" />
					</a>
					<a href="https://wa.me/18997284602" target="_blank">
						<AiOutlineWhatsApp className="icon" />
					</a>
				</div>
			</Container>
		</FooterStyled>
	);
}
