function Input({ label, name, type, value, onChange, placeholder, pattern }) {
    return (
        <label>
            {label}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                pattern={pattern}
            />
        </label>
    )
}

export default Input
