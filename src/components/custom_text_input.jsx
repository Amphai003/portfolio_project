const CustomTextInput = ({ 
    label, 
    type = "text", 
    placeholder, 
    id, 
    name,
    value,
    onChange,
    required = false 
}) => {
    return (
        <div className="p-4">
            <label htmlFor={id} className="block text-sm font-bold text-blue-400">
                {label}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    rows={4}
                    className="block w-full px-2 py-4 mt-2 placeholder-gray-500 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm resize-vertical"
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="block w-full px-2 py-4 mt-2 placeholder-gray-500 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                />
            )}
        </div>
        
    );
};

export default CustomTextInput;