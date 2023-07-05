import React from "react";
import './style.css'
const Start=()=>{
    return(
        <div>
            <h1>node_modules folder</h1>
            <p>The node_modules folder contains all of our dependencies, and this folder is ignored when we set up source control.</p>
            <p>it is important to note that the package.json file works in tandem with the node_modules folder because it contains information about all of the dependencies as well as some script commands.</p>
            <p>If you delete the node_modules folder, the application will break because you'll no longer have your dependencies.</p>
         
            
        </div>

        
    )
}
export default Start;