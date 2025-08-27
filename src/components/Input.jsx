function Input({ label, type, value, onChange, placeholder, pattern }) {
    return (
        <label>
            {label}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                pattern={pattern}
            />
        </label>
    )
}

export default Input
