import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
  const titleInput = useRef();
  const descriptionInput = useRef();
  const dueDateInput = useRef();

  const modal = useRef();

  function handleSave() {
    const enteredTitle = titleInput.current.value;
    const enteredDescription = descriptionInput.current.value;
    const enteredDueDate = dueDateInput.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
    } else {
      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      });
    }
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.{' '}
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleInput} label="Title" />
          <Input ref={descriptionInput} label="Description" textarea />
          <Input type="date" ref={dueDateInput} label="Due Date" />
        </div>
      </div>
    </>
  );
}
