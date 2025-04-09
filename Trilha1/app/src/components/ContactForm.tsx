import "./ContactFrom.css";

const ContactForm = () => {
  return (
    <div className="container3">
      <div>
        <label htmlFor="">Email</label>
        <br />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Assunto</label>
        <br />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Mensagem</label>
        <br />
        <textarea name="" id=""></textarea>
      </div>
      <button>Enviar</button>
    </div>
  );
};

export default ContactForm;
