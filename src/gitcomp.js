import React from 'react';
import axios from 'axios';
import { Card } from 'antd';

class GitCompare extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={user:[]};
        this.getUserDetails=this.getUserDetails.bind(this);
    }
    getUserDetails()
    {
        var x=document.getElementById("userid").value;
        console.log(x);
        document.getElementById("userid").value="";
        var id='https://api.github.com/users/'+x;
        console.log(id);
        axios.get(id)
        .then(res =>
            {
            var temp=this.state.user;
             console.log(res);  
             temp.push(res.data)
             this.setState({user:temp}) 
             console.log(this.state.user);

             //console.log("yes",this.state.td.averagedaysdelay);
            })
            .catch(error=>
                {
                    console.log(error)
                })

    }
    render()
    {
        return(<div style={{backgroundColor:"#4b9c3e",height:"100vh"}}>
            <h1 style={{textAlign:"center",fontSize:"50px",color:"#d1cdcd"}}>GITHUBCOMPARE</h1>
            <input type="text" id="userid" style={{height:"40px",borderRadius:"20px",width:"300px"}}></input>
            <br></br>
        <button onClick={this.getUserDetails} style={{height:"40px",borderRadius:"20px",width:"100px",textAlign:"center"}}>Enter UserID </button>
    <h1>{this.state.user.name}</h1>
    {this.state.user.map((each)=>
        <div style={{borderColor:"black",borderWidth:"10px"}}><Card title={each.name} extra={<a href={each.html_url}>Check Profile</a>} style={{ width: 300 ,border:"10px",borderColor:"black"}}>
      <p>Followers:{each.followers}  |  Following:{each.following}</p>
      <p></p>
      <p>Card content</p>
    </Card></div>)}
    </div>);
    }
}

export default GitCompare;