import React, {Component} from "react";

class Myclass extends Component{
    render(){
        return <h1>class components</h1>
    }
}
class Helloclass extends Component{
    render(){
        return <div> hello class components</div>
    }
}

// export default myclass
export {Myclass,
    Helloclass
}