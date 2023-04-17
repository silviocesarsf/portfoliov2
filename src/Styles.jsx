import styled from "styled-components";

export const Section = styled.section`
	min-height: 100vh;
	width: 100%;
	display: flex;
	padding-top: 2rem;
	align-items: ${(props) => props.align};
	justify-content: ${(props) => props.justify};
	flex-direction: ${(props) => props.flex};
	padding: 0 5rem;

	
	video {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		min-height: 100vh;
		width: 100%;
		opacity: 0.3;
		object-fit: cover;
	}
	
	.title-container {
		position: absolute;
		top: 30%;
		left: 20%;
	}
	
	.title-component {
		padding-bottom: 3rem;
		text-align: left;
	}
	

	@media screen and (max-width: 560px) {
		flex-direction: column;
		padding: 1rem 2rem;
		
		.title-container {
			z-index: -1;
		}

		.title-container {
			text-align: center;
			top: 22%;
			left: 0%;
		}

		/* .title-container p {
			font-size: 1.2em;
		}

		*/

		.title-container h1 {
			line-height: 100px;
		}

		/* .title-container h3 {
			font-size: 1.55em;
		}  */
		
	}
`;

export const HeaderStyled = styled.header`
	min-width: 100%;
	padding: 1rem 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: "Anonymous Pro", monospace;
	text-transform: uppercase;
	position: fixed;
	backdrop-filter: blur(4px);
	z-index: 10;

	.logo img {
		max-height: 60px;
	}

	.navbar li,
	button {
		display: inline-block;
		margin: 0 1.25rem;
		transition: 0.5s;
	}

	.navbar li:hover {
		color: ${(props) => props.theme.colors.primary};
	}

	@media (max-width: 768px) {
		padding: 20px 40px;
	}
`;

export const ButtonStyled = styled.button`
	background: transparent;
	height: 40px;
	min-width: 80px;
	border: 1px solid ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.primary};
	font-size: 1em;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	border-radius: 3px;
	transition: 0.5s;

	&:hover {
		transform: translateY(5px);
	}

	&:active {
		transition: 0.1s;
		background: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.secundary};
	}
`;

export const SocialIcons = styled.div`
	z-index: 6;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	font-size: 2.6em;
	position: fixed;
	left: 4%;
	bottom: 5%;

	.icon:hover {
		transition: 1s;
		color: ${(props) => props.theme.colors.primary};
		cursor: pointer;
	}

	@media screen and (max-width: 560px) {
		display: none;
	}
`;

export const Line = styled.span`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background: ${(props) => props.theme.colors.text};
	opacity: ${(props) => props.opacity};
`;

export const Email = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 1em;
	font-family: "Anonymous Pro", monospace;
	gap: 20px;
	position: fixed;
	right: 5%;
	bottom: 25%;
	cursor: pointer;
	transition: 0.5s;

	&:hover {
		color: ${(props) => props.theme.colors.primary};
	}

	@media screen and (max-width: 560px) {
		display: none;
	}
`;

export const Container = styled.div`
	display: ${(props) => props.display};
	align-items: ${(props) => props.align};
	justify-content: ${(props) =>
		props.justify ? props.justify : "space-between"};
	flex-direction: ${(props) => props.flex};
	gap: ${(props) => props.gap};
	width: ${(props) => props.width};
	padding-top: 1rem;

	.photo-about_me .square {
		z-index: 3;
		height: 400px;
		width: 400px;
		border: 2px solid ${(props) => props.theme.colors.primary};
		background: url("https://i.imgur.com/Uag3QX9.jpg");
		background-position: center;
		background-size: cover;
	}

	.square::before {
		content: "";
		position: absolute;
		z-index: 10;
		height: 400px;
		width: 400px;
		background: #47c1d175;
	}

	.photo-about_me .sub-square {
		position: relative;
		bottom: 350px;
		left: 50px;
		z-index: -1;
		height: 400px;
		width: 400px;
		background: transparent;
		border: 2px solid ${(props) => props.theme.colors.secundary};
	}

	.list-skills {
		width: 100%;
	}

	.list-skills li {
		display: flex;
		align-items: center;
		justify-content: left;
		color: ${(props) => props.theme.colors.secundary};
		margin: 1rem 0;
		gap: 1rem;
		text-align: center;
	}

	.project-image {
		height: 400px;
		width: 400px;
		border: 1px solid ${(props) => props.theme.colors.secundary};
		overflow: hidden;
	}

	.project-image img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;
		z-index: 1;
	}

	.project-image::before {
		content: "";
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 5;
		background-image: radial-gradient(
			circle,
			#5acbd332 60%,
			black
		);
		backdrop-filter: blur(3px);
	}

	.info-project {
		color: ${(props) => props.theme.colors.primary};
		font-size: 3em;
		cursor: pointer;
	}

	.form-contact {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
	}

	@media screen and (max-width: 560px) {
		flex-direction: column;
		text-align: left;
		line-height: 40px;
		justify-content: center;
		align-items: center;

		.photo-about_me {
			position: relative;
			top: 140px;
		}

		.photo-about_me .square {
			height: 200px;
			width: 200px;
		}

		.square::before {
			content: "";
			position: absolute;
			z-index: 10;
			height: 200px;
			width: 200px;
			background: #47c1d175;
		}
		.photo-about_me .sub-square {
			height: 200px;
			width: 200px;
		}

		.project-image {
			height: 200px;
			width: 200px;
		}

		.project-infos h1 {
			padding-top: 20px;
			font-size: 1.5em;
			text-align: center;
		}
	}
`;

export const Paragraph = styled.p`
	color: ${(props) => props.theme.colors.primary};
	font-family: "Anonymous Pro", monospace;
	font-weight: bold;
	font-size: 1.4em;

`;

export const ParagraphSmall = styled.p`
	color: ${(props) => props.theme.colors.text_secundary};
	font-size: 1.2em;
	padding-top: 1rem;
	width: ${(props) => props.width};
`;

export const Title = styled.h1`
	color: ${(props) => props.theme.colors.text_primary};
	font-size: 5em;
	font-weight: bold;
`;

export const SubTitle = styled.h3`
	color: ${(props) => props.theme.colors.text_secundary};
	font-size: 2.3em;
	font-weight: bold;
`;

export const Emphasis = styled.span`
	color: ${(props) => props.theme.colors.primary};
`;

export const ListArrow = styled.div`
	height: 7px;
	width: 7px;
	background: ${(props) => props.theme.colors.primary};
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	transform: rotate(90deg);
`;

export const Input = styled.input`
	height: 30px;
	min-width: 20vw;
	background: #181c3b6a;
	color: white;
	padding: 20px 1rem;
	border-radius: 5px;
	border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const TextArea = styled.textarea`
	min-width: 20vw;
	min-height: 300px;
	color: white;
	font-family: "Poppins", Arial, Helvetica, sans-serif;
	resize: none;
	background: #181c3b6a;
	padding: 20px 1rem;
	border-radius: 5px;
	border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const FooterStyled = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 15vh;
	min-width: 100%;
	background: #0a192f96;
	backdrop-filter: blur(2px);
	margin-top: 2rem;

	.right-footer :nth-child(n) {
		margin: 0 1rem;
	}
`;
