import './CSS/contact.css';

function Contact() {
  function handleSubmit() {
    alert('Form Submitted');
  }
  return (
    <>
      <section id="contact">
        <h2 className="text-2xl font-semibold text-gray-800 m-6 p-3 text-center bg-aliceblue rounded-lg shadow-md">
          Contact Me
        </h2>

        <div
          id="contact_form"
          className="m-6 p-6 bg-aliceblue rounded-lg shadow-md"
        >
          <form
            className="grid text-right justify-center border border-black rounded-lg"
            action={() => handleSubmit()}
          >
            <label className="m-1">
              First Name:
              <input className="inline-block ml-[5px] border border-black" name="firstname" />
            </label>
            <label className="m-1">
              Last Name:
              <input className="inline-block ml-[5px] border border-black" name="lastname" />
            </label>
            <label className="m-1">
              Email Adress:
              <input className="inline-block ml-[5px] border border-black" name="email" />
            </label>
            <label className="m-1">
              Phone Number:
              <input className="inline-block ml-[5px] border border-black" type="number" name="firstname" />
            </label>






            <div className="flex justify-between">
              <button className="form-button border border-black m-1 p-1 bg-white transition duration-300 ease-in-out" type="reset">Reset Form</button>
              <button className="form-button border border-black m-1 p-1 bg-white transition duration-300 ease-in-out"  type="submit">Submit Form</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
