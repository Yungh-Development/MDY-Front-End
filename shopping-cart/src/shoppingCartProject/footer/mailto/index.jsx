import { React, useState, useRef } from "react";

export const MailTo = (onSubmitSavedDatas) => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");

  const inputRef = useRef(null);

  const mailToNameHandler = (data) => {
    setName(data.target.value);
  };
  const mailToEmailHanlder = (data) => {
    setMail(data.target.value);
  };

  const onSubmitMailToHandler = (data) => {
    const mailToForm = {
      name,
      email,
    };

    onSubmitSavedDatas(mailToForm);
    data.preventDefault();
    setName("");
    setMail("");
    inputRef.current.focus();
  };
  return (
    <div className="text-center">
      <span>Mail to!</span>
      <form
        className="relative font-black text-black text-md flex flex-col "
        onSubmit={onSubmitMailToHandler}
      >
        <label htmlFor="name">
          <input
            ref={inputRef}
            type="text"
            name="name"
            className="m-1 font-black pl-1"
            placeholder="Name"
            onChange={(data) => mailToNameHandler(data)}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            className="m-1 font-black pl-1"
            placeholder="Email"
            onChange={(data) => mailToEmailHanlder(data)}
          />
        </label>
        <div className="mt-2">
          <button
            type="submit"
            className="bg-[#303D4E] p-2 font-black text-white rounded-sm w-14 hover:opacity-80 hover:border-1 hover:shadow-[0_1px_4px_1px_rgba(256,256,256,0.1)]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
