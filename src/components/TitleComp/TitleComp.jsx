import React from "react";
import { Container, Line, Paragraph, SubTitle } from "../../Styles";

export default function TitleComp({ numberTitle, nameTitle }) {
	return (
		<div data-aos="fade-down" className="title-component">
			<Container
				display="flex"
				align="center"
				justify="left"
				gap="1rem"
			>
				<Paragraph>{numberTitle} -</Paragraph>
				<SubTitle>{nameTitle}</SubTitle>
				<Line width="300px" height="2px" opacity=".2" />
			</Container>
		</div>
	);
}
