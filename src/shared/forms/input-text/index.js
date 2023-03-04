const InputText = ({name, value, handleChange}) => (
  <>
    <label>Nome</label>
    <input type='text' name={name} value={value || ""} onChange={handleChange} />
  </>
)

export default InputText

