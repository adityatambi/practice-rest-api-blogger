import { FieldError, useForm } from 'react-hook-form';
import { NewPostData } from './types';
import { ValidationError } from './ValidationError';

type Props = {
  onSave: (newPost: NewPostData) => void; // onSave: () => void
};

export function NewPostForm({ onSave }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewPostData>();

  const fieldStyle = 'flex flex-col mb-2 ';
  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : 'border border-gray-300 rounded-md';
  }

  return (
    <form noValidate className="border-b py-4" onSubmit={handleSubmit(onSave)}>
      <div className={fieldStyle}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'You must enter a title' })}
          className={getEditorStyle(errors.title)}
        />
        <ValidationError fieldError={errors.title} />
      </div>

      <div className={fieldStyle}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'You must enter the description' })}
          className={getEditorStyle(errors.description)}
        />
      </div>

      <div className={fieldStyle}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-10 px-6 font-semibold bg-black text-white"
        >
          Save
        </button>
        {isSubmitSuccessful && (
          <div role="alert" className="text-green-500 text-xs mt-1">
            The post was successfully saved
          </div>
        )}
      </div>
    </form>
  );
}
