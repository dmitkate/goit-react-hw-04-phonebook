export const Find = props => {
  return (
    <>
      <label htmlFor="">
        Find contact by name
        <input
          name="search"
          onChange={e => props.onChange(e.currentTarget.value)}
        />
      </label>
    </>
  );
};
