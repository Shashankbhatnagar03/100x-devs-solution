/* eslint-disable */
function BusinessCard(props){
  // console.log(name);
    return (
      <div>
      
    <h1 >{props.name}</h1>
        <p >{props.description}</p>
        <div>
        <h2 >Interests</h2>

        <ul>
          {props.interest && props.interest.map((interest) => (
            <li key={interest} >
              {interest}
            </li>
          ))}
        </ul>
        </div>

        <div >
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer" >
            LinkedIn
          </a>
          <br />
          <a href={props.twitter} target="_blank" rel="noopener noreferrer" >
            Twitter
          </a>
        </div>
        </div>
    );
}




export default BusinessCard