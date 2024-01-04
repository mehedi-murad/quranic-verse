import React from "react";
import emailjs from 'emailjs-com'
import Swal from "sweetalert2";
const Feedback = () => {
    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('service_zh02ajh', 'template_hu192ev', e.target, 'MLLZXf7xyUqEocSiQ')
        .then(res =>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your feedback has sent",
                showConfirmButton: false,
                timer: 1500
              });
        });
    }
  return (
    <div className="bg-slate-600 min-h-screen">
        <div className="max-w-4xl mx-auto p-20">
            <h2 className="text-3xl font-bold text-center p-20">Feedback!</h2>
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered input-accent  w-full"
                required
                />{" "}
                <br />
                <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className="input input-bordered input-accent  w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Your Phone"
                    name="phone"
                    className="input input-bordered input-accent  w-full"
                    required
                />
                <br />
                <textarea
                className="textarea textarea-accent w-full"
                name="desc"
                placeholder="Your Message"
                required
                ></textarea>
                <input
                className="bg-[#1F2937] px-4 py-2 text-white font-semibold rounded-lg mt-10 btn-block"
                type="submit"
                />
            </form>
        </div>
    </div>
  );
};

export default Feedback;
