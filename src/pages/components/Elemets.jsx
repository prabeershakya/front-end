export function Buttons({ label, onClick, className}) {
    return (
        <div>
            <button
                onClick={onClick}
                className={`${className ? className : 'bg-green-800 text-2xl font-semibold rounded-sm w-50 h-25'}`} 
            >
                {label}
            </button>
        </div>
    );
}

export  function Field({placeholder, name, onChange, className}) {
  return (
    <div>
      <input 
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="bg-gray-100 h-10 font-semibold text-black"
      />
    </div>
  )
}

