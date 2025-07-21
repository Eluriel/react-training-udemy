import { useRef } from 'react';
import Input from './Input';

export default function NewProject({ onAdd }) {
  const titleInput = useRef();
  const descriptionInput = useRef();
  const dueDateInput = useRef();

  function handleSave() {
    const enteredTitle = titleInput.current.value;
    const enteredDescription = descriptionInput.current.value;
    const enteredDueDate = descriptionInput.current.value;

    // TODO validation

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}
