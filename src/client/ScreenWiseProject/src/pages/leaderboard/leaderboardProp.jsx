
function leaderboardProp (props) {

  return (
    <div>
      <div>
        <div>
          <p>{props.rank}</p>
          <p>@{props.username}</p>
        </div>
        <div>
          <p>{props.hours}</p>
        </div>
      </div>
    </div>
  )

}

export default leaderboardProp;