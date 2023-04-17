import React, { useContext } from "react";
import {
	Container,
	Email,
	Emphasis,
	Line,
	ListArrow,
	Paragraph,
	ParagraphSmall,
	SocialIcons,
	SubTitle,
	Title,
	Section,
} from "../Styles";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";
import bg from "../assets/background-hacking_trimmed.mp4";
import TitleComp from "../components/TitleComp/TitleComp";
import ProjectComp from "../components/ProjectComp/ProjectComp";
import Aos from "aos";
import FormContact from "../components/FormContact/FormContact";
import thumbTodo from "../assets/todolist-thumb.png";
import thumbLogin from "../assets/loginpage-thumb.png";
import thumbWeather from "../assets/weather-thumb.png";
import { ContextProvider } from "../context/Context";

export default function Home() {
	Aos.init();

	const { isMobile } = useContext(ContextProvider)

	return (
		<>
			<Section
				id="home"
				align="center"
				justify="center"
				className="home"
			>
				<video width="100%" height="100vh" playsInline autoPlay loop muted>
					<source src={bg} type="video/mp4" />
				</video>
				<SocialIcons data-aos="fade-up" data-aos-delay="1200">
					<a href="https://github.com/silviocesarsf?tab=repositories" target="_blank">
						<FiGithub className="icon" />
					</a>
					<a href="https://www.linkedin.com/in/silvio-c%C3%A9sar-976788229/" target="_blank">
						<SlSocialLinkedin className="icon" />
					</a>
					<a href="https://www.instagram.com/silviocesarsf/" target="_blank">
						<AiOutlineInstagram className="icon" />
					</a>
					<Line width="3px" height="160px" />
				</SocialIcons>
				<a href="mailto:silviocesarjob@gmail.com" target="_blank">
					<Email data-aos="fade-up" data-aos-delay="1200">
						<span>E</span>
						<span>M</span>
						<span>A</span>
						<span>I</span>
						<span>L</span>
					</Email>
				</a>
				<Container
					data-aos="fade-right"
					data-aos-delay="1400"
					className="title-container"
				>
					<Paragraph>Olá, Meu nome é</Paragraph>
					<Title>Silvio César</Title>
					<SubTitle>
						E eu construo <Emphasis>Sites</Emphasis>.
					</SubTitle>
					<ParagraphSmall>
						Sou estudante de Análise e desenvolvimento de
						sistemas. <br />
						Atualmente estudo a Stack de Frontend.
					</ParagraphSmall>
				</Container>
			</Section>
			<Section
				id="aboutme"
				align="center"
				justify="center"
				className="about-me"
			>
				<Container
					display="flex"
					align="flex-start"
					justify="space-between"
					gap="1rem"
				>
					<Container
						display="flex"
						align="center"
						justify="center"
						flex="column"
						width="40vw"
					>
						<TitleComp
							nameTitle="Sobre mim"
							numberTitle="01"
						/>
						<div
							data-aos="fade-left"
							data-aos-delay="400"
							className="text-about_me"
						>
							<ParagraphSmall>
								Olá, me chamo{" "}
								<Emphasis>Silvio César</Emphasis>,
								tenho 19 anos e um sonho de um dia
								trabalhar com programação.
							</ParagraphSmall>
							<ParagraphSmall>
								Ainda não possuo experiência
								profissional relevante, mas muita
								experiência em projetos pessoais, nos
								quais utilizo desde o básico, como{" "}
								<Emphasis>HTML5</Emphasis>,{" "}
								<Emphasis>CSS3</Emphasis> e{" "}
								<Emphasis>JavaScript</Emphasis> até
								bibliotecas e supersets como{" "}
								<Emphasis>
									ReactJS, Styled Components,
									TypeScript e SASS
								</Emphasis>
								.
							</ParagraphSmall>
							<ParagraphSmall>
								Desde criança tenho muito contato com
								o mundo da tecnologia, sempre sendo
								curioso e botando em prática cada
								conhecimento adquirido. Acredito que
								com minha vontade de aprender e
								resolver problemas e desafios com
								certeza agregaria muito para a empresa
								que eu trabalhe e a minha carreira.
							</ParagraphSmall>

							<Container
								display="flex"
								align="center"
								justify="left"
								gap="2rem"
								className="list-skills"
							>
								<ul
									data-aos="flip-left"
									data-aos-delay="1500"
								>
									<li>
										<ListArrow />
										ReactJS
									</li>
									<li>
										<ListArrow />
										JavaScript
									</li>
									<li>
										<ListArrow />
										StyledComponents
									</li>
								</ul>
								<ul
									data-aos="flip-right"
									data-aos-delay="1800"
								>
									<li>
										<ListArrow />
										TypeScript
									</li>
									<li>
										<ListArrow />
										Metodologias Ágeis
									</li>
									<li>
										<ListArrow />
										SASS
									</li>
								</ul>
							</Container>
						</div>
					</Container>
					<Container className="photo-about_me">
						<div
							data-aos="zoom-out-left"
							data-aos-delay="900"
							className="square"
						></div>
						<div
							data-aos="flip-left"
							data-aos-delay="600"
							className="sub-square"
						></div>
					</Container>
				</Container>
			</Section>
			<Section
				id="projects"
				align="center"
				justify="center"
				className="projects"
				flex="column"
			>
				<Container className="projects-title">
					<TitleComp
						nameTitle="Projetos"
						numberTitle="02"
					/>
				</Container>
				<ProjectComp
					isMobile={isMobile}
					img={thumbTodo}
					skill="ReactJS"
					skill2="StyledComponents"
					skill3="CRUD"
					nameProject="Todo List"
					linkProject="https://github.com/silviocesarsf/todolist-refatored"
					descriptionProject="Neste projeto utilizei StyledComponents e bibliotecas como Framer-motion e polished, além de aprender muito sobre estados e como conceitos de CRUD."
				/>
				<ProjectComp
					isMobile={isMobile}
					img={thumbLogin}
					skill="LocalStorage"
					skill2="ReactJS"
					skill3="StyledComponents"
					nameProject="Login Page"
					descriptionProject="Neste projeto utilizei Gerenciadores de estado, como o hook UseContext, além de salvar as informações do usuário no localStorage simulando um banco de dados."
					linkProject="https://github.com/silviocesarsf/loginpage"
					direction="row-reverse"
				/>
				<ProjectComp
					isMobile={isMobile}
					img={thumbWeather}
					skill="API"
					skill2="ReactJS"
					skill3="StyledComponents"
					nameProject="Weather "
					descriptionProject="Neste projeto utilizei uma API de clima na qual me retornava informações sobre cidades, estados ou países, utilizei muita renderização condicional para mostrar determinadas informações conforme a resposta obtida da API."
					linkProject="https://github.com/silviocesarsf/weatherapp"
				/>
			</Section>
			<Section
				id="contact"
				align="center"
				justify="center"
				className="contact"
				flex="column"
			>
				<TitleComp numberTitle="03" nameTitle="Contato" />
				<Container>
					<FormContact />
				</Container>
			</Section>
		</>
	);
}
