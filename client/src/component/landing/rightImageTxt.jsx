function RightImageTxt (props) {

  return (
    <div className='w-full bg-slate-200 py-64'>
    <div className='w-full max-w-6xl mx-auto'>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 mx-8">
        <div className="text-left p-4 order-1 md:order-none">
          <h1 className="font-extrabold text-4xl md:text-6xl">{props.header}</h1>
          <p className="mt-4 text-lg md:text-2xl">        
            {props.text}
          </p>
        </div>
        <div className="order-2 md:order-none">
          <img 
            src={props.img}
            className="w-full max-w-3xl rounded-3xl"
          />
        </div>
      </div>
    </div>
  </div>
  )

}

export default RightImageTxt;