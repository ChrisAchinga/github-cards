const CardDetails = (props) => {
  return (
    <>
      <div className='github-profile'>
        <img src={props.avatar} />
        <div className='info'>
          <div className='name'>{props.name}</div>
          <div className='company'>{props.company}</div>
        </div>
      </div>
    </>
  )
}

export default CardDetails
