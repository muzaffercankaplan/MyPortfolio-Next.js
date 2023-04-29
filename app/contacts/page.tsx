"use client";

import { useState } from "react";

const Contacts = () => {
  const [formValue, setFormValue] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="flex flex-col justify-center h-full">
        <h2 className="block md:hidden text-2xl mb-4">Contact</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 gap-5lg:py-10 flex flex-col justify-center text-center lg:col-span-2 w-full h-full">
            <div className="text-4xl mb-4 items-center">
              <h2>If Not Now, When?</h2>
              <h2>{`Let's work Together!!`}</h2>
            </div>
            <div className="text-5xl flex justify-center items-center">
              <p className="hover:text-hoverc hover:scale-125 cursor-pointer duration-700">
                [̲̅m̲̅]
              </p>
              <p className="hover:text-hoverc hover:scale-125 cursor-pointer duration-700 mx-2 mb-7">
                [̲̅C̲̅]
              </p>
              <p className="hover:text-hoverc hover:scale-125 cursor-pointer duration-700">
                [̲̅k̲̅]
              </p>
            </div>
          </div>
          <div className="col-span-3 lg:py-10 justify-center text-left w-full h-full">
            <form
              // onSubmit={handleSubmit}
              action="https://getform.io/f/9b2ac89d-2e50-475c-9a93-85a1ba1283be"
              method="POST"
              className="mx-10 "
            >
              <div className="flex flex-col">
                <label htmlFor="Name" className="uppercase mb-1 ml-3 md:ml-0">
                  Name
                </label>
                <input
                  id="Name"
                  required
                  value={formValue.name}
                  onChange={(e) =>
                    setFormValue({ ...formValue, name: e.target.value })
                  }
                  name="Name"
                  className="rounded-xl p-2 text-primary outline-0"
                />
              </div>
              <div className="flex flex-col my-3">
                <label htmlFor="Email" className="uppercase my-1 ml-3 md:ml-0">
                  Email
                </label>
                <input
                  id="Email"
                  value={formValue.email}
                  onChange={(e) =>
                    setFormValue({ ...formValue, email: e.target.value })
                  }
                  required
                  type="email"
                  name="Email"
                  className="rounded-xl p-2 text-primary outline-0"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Message"
                  className="uppercase mb-1 ml-3 md:ml-0"
                >
                  Message
                </label>
                <textarea
                  id="Message"
                  required
                  value={formValue.message}
                  onChange={(e) =>
                    setFormValue({ ...formValue, message: e.target.value })
                  }
                  name="Message"
                  className="rounded-xl resize-none outline-0 text-primary p-2"
                  rows={4}
                ></textarea>
              </div>
              <button className="border-hoverc border mt-5 px-5 text-center py-1 uppercase text-xl rounded-lg hover:scale-105 hover:bg-hoverc duration-500">
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
