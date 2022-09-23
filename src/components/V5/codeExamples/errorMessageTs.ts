export default `import { useForm, ErrorMessage } from "react-hook-form";

interface FormInputs {
  singleErrorInput: string
}

export default function App() {
  const { register, errors, handleSubmit } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="singleErrorInput" ref={register({ required: "This is required." })} />
      <ErrorMessage errors={errors} name="singleErrorInput" />
      
      <ErrorMessage errors={errors} name="singleErrorInput">
        {({ message }) => <p>{message}</p>}
      </ErrorMessage>
      
      <input name="name" ref={register({ required: true })} />
      <ErrorMessage errors={errors} name="name" message="This is required" />
      
      <input type="submit" />
    </form>
  );
}
`
