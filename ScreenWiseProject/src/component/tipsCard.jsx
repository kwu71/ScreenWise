
function TipsCard(props) {
  return(
    <div>

    <div className='w-full rounded-lg shadow-md bg-slate-100 transition duration-500 hover:scale-105'>
      <div className='p-6'>
        <div className='text-center'>
          <h1 className='text-xl font-extrabold'>{props.title}</h1>
          <div className='my-4'>
            <p>{props.tip}</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default TipsCard;