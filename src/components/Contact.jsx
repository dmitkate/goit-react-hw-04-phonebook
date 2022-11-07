import css from './contacts.module.css';
export function ContactList(props) {
  return (
    <div>
      <ul>
        {props.allContacts.map(i => (
          <li className={css.item} key={i.name}>
            {i.name}: {i.number}
            <button
              className={css.btn}
              type="button"
              onClick={() => props.delete(i.name)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
