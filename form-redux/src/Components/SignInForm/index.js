import { reduxForm, Field } from "redux-form";
import { Validations } from "../Validations";

export let SignInForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="bg-white shadow-md rounded w-96 pt-6 pb-8 mb-4">
        <p className="py-8 text-black text-2xl">Contact Form</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg  place-items-center justify-center"
        >
          <div className="w-full md:w-1/2 px-3">
            <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              <Field
                name="firstName"
                component={renderField}
                type="text"
                label="First Name"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              <Field
                name="lastName"
                component={renderField}
                type="text"
                label="Last Name"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Field
              name="age"
              component={renderField}
              type="number"
              label="Age"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              <Field
                name="email"
                component={renderField}
                type="email"
                label="Email Address"
              />
            </div>
          </div>

          <div className="flex mx-3 mb-2 ">
            <div className="  flex-row md:items-center mb-6">
              <div className="flex-row  ">
                <label className="md:w-2/3 block text-gray-500 font-bold ml-4">
                  Gender
                </label>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="male"
                  />{" "}
                  Male
                </label>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600">
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="female"
                  />{" "}
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const renderField = ({ input, label, type }) => (
  <div>
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      {label}
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      {...input}
      placeholder={label}
      type={type}
    />
  </div>
);

SignInForm = reduxForm({
  form: "signIn",
  Validations,
})(SignInForm);
