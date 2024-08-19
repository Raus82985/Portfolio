import { createElement, useRef, useEffect, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // State to track input values
  const [inputs, setInputs] = useState({
    from_name: '',
    user_email: '',
    message: ''
  });

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zv96xrk', 'template_m8t25rg', form.current, 'TIjVLsqruq8Ytgr85'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          setInputs({ from_name: '', user_email: '', message: '' });
          form.current.reset();
          // Success toast message
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  return (
    <section className="bg-slate-600 pb-10 text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h4
          className={`subtitle text-white text-left ${isMobile ? 'text-center' : ''}`}
          data-aos="fade-up"
        >
          {Contact.title}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              value={inputs.from_name}
              onChange={handleChange}
              placeholder="Name"
              required
              className={`border p-3 rounded-xl ${inputs.from_name ? 'bg-slate-200 text-black' : 'bg-slate-600'} focus:border-white`}
            />
            <input
              type="email"
              name="user_email"
              value={inputs.user_email}
              onChange={handleChange}
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className={`border p-3 rounded-xl ${inputs.user_email ? 'bg-slate-200 text-black' : 'bg-slate-600'} focus:border-white`}
            />
            <textarea
              name="message"
              value={inputs.message}
              onChange={handleChange}
              placeholder="Message"
              className={`border p-3 rounded-xl h-44 ${inputs.message ? 'bg-slate-200 text-black' : 'bg-slate-600'} focus:border-white`}
              required
            ></textarea>
            <button
              className="border border-white px-7 py-2 rounded-br-3xl rounded-lg self-start bg-slate-600 text-slate-200 hover:bg-white hover:text-slate-600"
            >
              Submit
            </button>
          </form>

          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 430}
                className="flex items-center gap-2 hover:underline hover:text-lg"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank" rel="noopener noreferrer">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
