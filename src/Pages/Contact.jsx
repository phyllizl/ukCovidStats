import ContactForm from "../Components/ContactForm"
import Header from "../Components/Header"

const ContactPage = () => {

    return (
        <>
            <Header 
                src="/images/localData.png"
                title="Contact Us"
                subtitle="Got a question? Feel free to reach out."
            />
            <ContactForm />
        </>
    )
}

export default ContactPage;