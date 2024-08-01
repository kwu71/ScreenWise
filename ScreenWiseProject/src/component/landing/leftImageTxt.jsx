function LeftImageTxt (props) {

  return (
  <div className='w-full bg-slate-100 py-64'>
    <div className='w-full max-w-6xl mx-auto'>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 mx-8">
        <div className="order-2 md:order-none">
          <img 
            src={props.img}
            className="w-full max-w-3xl rounded-3xl"
          />
        </div>
        <div className="text-left p-4 order-1 md:order-none">
          <h1 className="font-extrabold text-5xl">{props.header}</h1>
          <p className="mt-4">        
            {props.text}
          </p>
        </div>
      </div>
    </div>
  </div>
  )

}

export default LeftImageTxt;