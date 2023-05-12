function SubmitButton({ label, disabled, className }) {
  return <button
    className={className}
    type="submit"
    disabled={disabled}>
    {label}
  </button>
}

export default SubmitButton;