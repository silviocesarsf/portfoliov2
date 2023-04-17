import React, { useState } from "react";
import {
	Container,
	ListArrow,
	Paragraph,
	ParagraphSmall,
	Title,
} from "../../Styles";
import ModalComp from "../Modal/ModalComp";

export default function ProjectComp({
	direction,
	nameProject,
	skill,
	skill2,
	skill3,
	img,
	descriptionProject,
	linkProject,
	isMobile,
	linkSite
}) {
	return (
		<Container
			display="flex"
			align="center"
			justify="space-between"
			width="80%"
			flex={direction}
			className="projects-container"
		>
			<a href={linkSite} target="_blank">
				<div data-aos="flip-down" className="project-image">
					<img src={img} alt="" />
				</div>
			</a>
			<div
				data-aos="fade-left"
				data-aos-delay="100"
				className="project-infos"
			>
				<Container
					display="flex"
					align="center"
					justify="center"
					gap="1rem"
				>
					<Title>{nameProject}</Title>
					<ModalComp
						descriptionProject={descriptionProject}
						nameProject={nameProject}
						linkProject={linkProject}
					/>
				</Container>
				<div className="skills-used">
					<Container
						display="flex"
						align="center"
						justify="center"
						gap="10px"
					>
						{skill && (
							<>
								<ListArrow />
								<Paragraph>{skill}</Paragraph>
							</>
						)}
						{skill2 && (
							<>
								<ListArrow />
								<Paragraph>{skill2}</Paragraph>
							</>
						)}
						{skill3 && (
							<>
								<ListArrow />
								<Paragraph>{skill3}</Paragraph>
							</>
						)}
					</Container>
				</div>
			</div>
		</Container>
	);
}
