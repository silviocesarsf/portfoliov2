import { useForm, ValidationError } from "@formspree/react";
import { ButtonStyled, Input, TextArea } from "../../Styles";

export default function FormContact() {
	const [state, handleSubmit] = useForm("mdovwakg");
	if (state.succeeded) {
		return <p>Obrigado pelo contato !</p>;
	}
	return (
		<form className="form-contact" onSubmit={handleSubmit}>
			<label data-aos="fade-down" htmlFor="email">
				Endereço de Email
			</label>
			<Input
				data-aos="fade-down"
				id="email"
				type="email"
				name="email"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			<label
				data-aos="fade-down"
				data-aos-delay="200"
				htmlFor="email"
			>
				Mensagem
			</label>
			<TextArea
				data-aos="fade-down"
				data-aos-delay="200"
				id="message"
				name="message"
			/>
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			<ButtonStyled type="submit" disabled={state.submitting}>
				Enviar
			</ButtonStyled>
		</form>
	);
}
