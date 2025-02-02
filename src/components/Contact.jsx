import { useState } from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SuccessPopup from "./Popup";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [onclose, setClose] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_EMAIL_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setClose(true);
      console.log("Success", res);
    }
  };

  return (
    <>
      <div className=" bg-gray-900 text-gray-100 py-12 px-2 sm:px-6 lg:px-8 blocks h-screen">
        <div className="max-w-2xl mx-auto p-1">
          <h1 className="text-3xl font-bold text-center mb-3 mt-8 blocks">
            Contact Me
          </h1>

          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-3 mb-1 lg:mb-4 lg:p-5 blocks ">
            <div className="flex items-center mb-3">
              <div>
                <h2 className="text-2xl font-semibold">Swapnil Rathod</h2>
                <div className="flex items-center mt-2">
                  <Phone className="mr-2" size={16} />
                  <span className="text-sm">+91 893745076</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-3 blocks">
              <Link
                to="mailto:swapnilrathod1002@gmail.com"
                className="flex items-center hover:text-blue-400 transition"
              >
                <Mail className="mr-2" size={20} /> Email
              </Link>
              <a
                href="https://github.com/Swapnil-Rathod02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition"
              >
                <Github className="mr-2" size={20} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/swapnil-rathod-a5259b245"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition"
              >
                <Linkedin className="mr-2" size={20} /> LinkedIn
              </a>
            </div>
          </div>

          <form
            action=""
            method="POST"
            onSubmit={onSubmit}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4 space-y-6 blocks"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 blocks"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <SuccessPopup onClose={onclose} setClose={setClose} />
    </>
  );
}
