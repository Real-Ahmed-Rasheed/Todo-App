

function Button({onClick, title = "Add"}) {
    
  return (
    <div className='bg-blue-500 rounded-sm w-16 h-8 text-center hover:cursor-pointer hover:scale-120 transition-all'>
      <p onClick={onClick}>{title}</p>
    </div>
  )
}

export default Button
