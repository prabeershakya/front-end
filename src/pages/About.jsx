import { Buttons } from "./components/Elemets";
import {Field} from "./components/Elemets";

const About = () => {
  const chnage = () => {

    
  }
  return (
    <div>
      <Buttons label="Click me" onClick={() => alert("Button clicked")} />
      <Field 
      name="username"
      placeholder="Enter username"
      
      onChange={(e)=> 
       alert("Hi")
      }

      />
      
    </div>
  );
};

export default About;
