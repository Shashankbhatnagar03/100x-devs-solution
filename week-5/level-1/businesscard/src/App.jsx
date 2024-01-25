
import BusinessCard from '../component/BusinessCard';
import './App.css'

function App() {
  const name = 'Shashank';
  const description = 'A Tech Enthusiast';
  const interest = ["Vlogging" , "Open-source ", "CP"];
  const twitter = 'www.twitter.com';
  const linkedin = 'www.linkedin.com';

  return (
    <>
      <div>
        <BusinessCard 
        name={name}
        description={description}
        interest={interest}
        linkedin={linkedin}
        twitter={twitter}
        // otherSocialMedia ={}

       />
      </div>
       
    </>
  )
}

export default App
