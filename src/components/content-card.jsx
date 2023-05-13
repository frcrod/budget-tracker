export default function ContentCard(props) {
  return (
    <div className='card w-3/12 bg-base-100 shadow-xl'>
      <figure>
        <img
          class='h-full object-cover'
          src={props.image}
          alt={`${props.title}-image`}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{props.title}</h2>
        <p>{props.content}</p>
        <div className='card-actions justify-end'>
          <a
            href={props.href}
            className='btn btn-primary'
            target='_blank'
            rel='noopener'
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
