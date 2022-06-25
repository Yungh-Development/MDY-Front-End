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
    <div>
      <span className="ml-14">Mail to!</span>
      <form
        className="relative font-black text-black text-md flex flex-col "
        onSubmit={onSubmitMailToHandler}
      >
        <label htmlFor="name" placeholder="Name">
          <input
            ref={inputRef}
            type="text"
            name="name"
            className="m-1"
            onChange={(data) => mailToNameHandler(data)}
          />
        </label>
        <label htmlFor="email" placeholder="Email">
          <input
            type="email"
            name="email"
            className="m-1"
            onChange={(data) => mailToEmailHanlder(data)}
          />
        </label>
        <button
          type="submit"
          className="bg-[#303D4E] p-1 font-black text-white rounded-sm w-10 absolute top-full right-1"
        >
          Send
        </button>
      </form>
    </div>
  );
};
