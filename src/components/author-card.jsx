export default function AuthorCard(props) {
  return (
    <div className='card w-96 bg-base-100 shadow-xl my-5'>
      <figure className='px-10 pt-10'>
        <img
          src={props.image}
          alt={`${props.name}-icon`}
          className='rounded-xl border-2 h-40 w-40 my-auto object-cover'
        />
      </figure>
      <div className='card-body items-center pt-2 text-center'>
        <h2 className='card-title text-lg'>{props.name}</h2>
      </div>
    </div>
  );
}
