import React from 'react'
import BlogContextDemo from './BlogContextDemo';
{/*import DigitalClock from './DigitalClock'*/}
const blogInfo ={
  React :{
    post:"learn useContextHooks",
    author:"Varun"
  },
  NodeJs :{
    post:"Node Commands",
    author :"Vena M"
  }
};
export const BlogContext = React.createContext(blogInfo);

function UsecontextDemo() {
  return (
    <div className="App">
     {/*<DigitalClock/>*/}
     <div>
      <h1>useContext() Demo</h1>
      <BlogContext.Provider value={blogInfo}><BlogContextDemo/></BlogContext.Provider>
     </div>
      
    </div>
  );
}

export default UsecontextDemo;
