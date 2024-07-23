
function LeaderboardProp (props) {

  return (
    <div className="mt-2 w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="px-4 py-1 bg-slate-200 rounded-lg">{props.rank}</p>
          <p className="ml-10">@{props.username}</p>
        </div>
        <div>
          {props.hours <= 9 && <p className="mr-5">{props.hours}</p>}
          {props.hours >= 10 && <p className="mr-4">{props.hours}</p>}
        </div>
      </div>
    </div>
  )

}

export default LeaderboardProp;