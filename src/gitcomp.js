import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import Statistic from './Highcharts'
import 'antd/dist/antd.css';
const gridStyle = {
    textAlign: 'center',
    fontSize:"20px",
    width:149
  };
  

class GitCompare extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={user:[],sorter:1};
        this.getUserDetails=this.getUserDetails.bind(this);
        this.sortFollowing=this.sortFollowing.bind(this);
        this.sortRepo=this.sortRepo.bind(this);
        this.sortGist=this.sortGist.bind(this);
        this.sortFollower=this.sortFollower.bind(this);
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
            })
            .catch(error=>
                {
                    console.log(error);
                    alert("Enter valid UserId");
                })

    }
    sortFollower()
    {
        var x=this.state.user;
        if(this.state.sorter===1)
        {
        for(var i=0;i<x.length;i++)
        {
            for(var j=0;j<x.length;j++)
            {
                if(x[i].followers>x[j].followers)
                {
                    var y=x[i];
                    x[i]=x[j];
                    x[j]=y;
                }
            }
        }
        this.setState({sorter:0})
    }
        else
        {
            for(var k=0;k<x.length;k++)
            {
                for(var l=0;l<x.length;l++)
                {
                    if(x[k].followers<x[l].followers)
                    {
                        var z=x[k];
                        x[k]=x[l];
                        x[l]=z;
                    }
                }
            }
            this.setState({sorter:1})
        }
        this.setState({user:x});
        console.log("sorted");
        console.log(this.state.user)
        this.state.user.sort();
        this.forceUpdate();
    

    }
    sortFollowing()
    {
     
        var x=this.state.user;
        if(this.state.sorter===1)
        {
        for(var i=0;i<x.length;i++)
        {
            for(var j=0;j<x.length;j++)
            {
                if(x[i].following>x[j].following)
                {
                    var y=x[i];
                    x[i]=x[j];
                    x[j]=y;
                }
            }
        }
        this.setState({sorter:0})
    }
    else
    {
        for(var k=0;k<x.length;k++)
        {
            for(var l=0;l<x.length;l++)
            {
                if(x[k].following<x[l].following)
                {
                    var z=x[k];
                    x[k]=x[l];
                    x[l]=z;
                }
            }
        }
        this.setState({sorter:1})
    }
        this.setState({user:x});
        console.log("sorted");
        console.log(this.state.user)
        this.forceUpdate();
    

    }
    sortRepo()
    {
        var x=this.state.user;
        if(this.state.sorter===1)
        {
        for(var i=0;i<x.length;i++)
        {
            for(var j=0;j<x.length;j++)
            {
                if(x[i].public_repos>x[j].public_repos)
                {
                    var y=x[i];
                    x[i]=x[j];
                    x[j]=y;
                }
            }
        }    this.setState({sorter:0})
    }
    else
    {
        for(var k=0;k<x.length;k++)
        {
            for(var l=0;l<x.length;l++)
            {
                if(x[k].public_repos<x[l].public_repos)
                {
                    var z=x[k];
                    x[k]=x[l];
                    x[l]=z;
                }
            }
        }    this.setState({sorter:1})
    }
        this.setState({user:x});
        console.log("sorted");
        console.log(this.state.user)
        this.forceUpdate();
    

    }
    sortGist()
    {
        var x=this.state.user;
        if(this.state.sorter===1)
        {
        for(var i=0;i<x.length;i++)
        {
            for(var j=0;j<x.length;j++)
            {
                if(x[i].public_gists>x[j].public_gists)
                {
                    var y=x[i];
                    x[i]=x[j];
                    x[j]=y;
                }
            }
        }    this.setState({sorter:0})
    }
    else
    {
        for(var k=0;k<x.length;k++)
        {
            for(var l=0;l<x.length;l++)
            {
                if(x[k].public_gists<x[l].public_gists)
                {
                    var z=x[k];
                    x[k]=x[l];
                    x[l]=z;
                }
            }
        }    this.setState({sorter:1})
    }
        this.setState({user:x});
        console.log("sorted");
        console.log(this.state.user)
        this.forceUpdate();
    

    }
    render()
    {
        return(<div style={{backgroundColor:"#25212c"}}>
            <h1 style={{textAlign:"center",fontSize:"50px",color:"#d1cdcd"}}> Git  -comp</h1>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <input type="text" id="userid" style={{height:"40px",borderRadius:"10px",width:"300px",padding:"0px",fontSize:"30px"}}></input>
            <br></br>
        <button onClick={this.getUserDetails} style={{height:"40px",borderRadius:"10px",borderWidth:"0px",borderColor:"transparent",margin:"0px",width:"100px",textAlign:"center",marginLeft:"10px"}}>COMPARE</button></div>
        <br></br>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>
        <button onClick={this.sortFollower}style={{marginLeft:"10px",marginRight:"10px"}}>Arrange by Followers</button>        
        <button onClick={this.sortFollowing} style={{marginLeft:"10px",marginRight:"10px"}}>Arrange by Following</button>        
        <button onClick={this.sortRepo} style={{marginLeft:"10px",marginRight:"10px"}}>Arrange by Repo</button>        
        <button onClick={this.sortGist} style={{marginLeft:"10px",marginRight:"10px"}}>Arrange by Gist</button>        
        </div>
    <h1>{this.state.user.name}</h1>
    <span style={{width:"50%",float:"right",color:"white"}}><Statistic data={this.state.user} /></span>
    <span style={{width:"50%",float:"left"}}>{this.state.user.map((each)=>
    <div style={{marginLeft:"15px"}}>
    <div className="site-card-border-less-wrapper" style={{width:400}}>
    <Card title={each.name}  style={{ width: 600, backgroundColor:"rgb(120 141 160)",fontSize:"23px",textDecoration:"bold"}}>
    <Card.Grid style={{fontSize:"20px",width:150}}>Followers:{each.followers}</Card.Grid>
    <Card.Grid style={gridStyle} >Following:{each.following}</Card.Grid>
    <Card.Grid style={gridStyle} >Repo : {each.public_repos}</Card.Grid>
    <Card.Grid style={gridStyle} >Gist : {each.public_gists}</Card.Grid>
    </Card>
    <br></br>
  </div></div>)}</span>
    </div>);
    }
}

export default GitCompare;