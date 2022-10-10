import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from '../hooks';
import { add } from '../todoSlice';

type Form = {
  text: string,
};

export const TodoForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Form>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Form> = (data, event) => {
    event?.preventDefault();
    console.log(data);
    dispatch(add(data.text));
  }

  // console.log(watch("text")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("text", { required: true })} />
        {/* errors will return when field validation fails */}
        {errors.text && <span>This field is required</span>}
      </div>

      <button type="submit">Add</button>
    </form>
  );
}
