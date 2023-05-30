function SubmitButton({ disabled, className, onClick, children }) {
  return <button
    onClick={onClick}
    className={className}
    type="submit"
    disabled={disabled}>
    {children}
  </button>
}

export default SubmitButton;