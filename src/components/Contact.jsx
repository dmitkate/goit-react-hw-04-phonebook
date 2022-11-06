import css from './contacts.module.css';
export function ContactList(props) {
  return (
    <div>
      <ul>
        {props.allContacts.map(i => (
          <li className={css.item} key={i.id}>
            {i.name}: {i.number}
            <button
              className={css.btn}
              type="button"
              onClick={() => props.delete(i.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
