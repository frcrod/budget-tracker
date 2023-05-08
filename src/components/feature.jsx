import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Feature(props) {
  return (
    <div className='card border-2 border-accent px-7 py-10 w-full lg:w-5/12'>
      <div className='card-body text-center'>
        <FontAwesomeIcon icon={props.icon} size='6x' />
        <h2 className='card-title mx-auto'>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
