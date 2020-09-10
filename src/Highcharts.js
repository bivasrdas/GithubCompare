import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

function getdata(d)
{
            var categories=[];
            var data=[];
            d.forEach(d=>
            {
                categories.push(d.name);
                data.push(d.followers);
            });
    var opt = {
        chart: {
          type: 'bar',
          height:'200px',
          backgroundColor:"#252c48"
        },
        title: {
          text: 'Followers',
          style:{
              color:"white"
          }
        },
        xAxis:{
            title: {
                text: '',
                style: {
                    color:'blue'
                }
            },
            categories:categories,
            scrollbar:
            {
                enable:true,
                
                
            }
        },
        yAxis:{
            title: {
                text: '',
                style: {
                    color:'blue'
                },
                gridLineWidth:'10px'
            },
            label:{
                overflow:"allow"
            }
        },
        series: [
            {   name: '',
            data:data
            },
            
    
        ],
    };
return opt;}
function getdata1(d)
{
            var categories=[];
            var data=[];
            d.forEach(d=>
            {
                categories.push(d.name);
                data.push(d.following);
            });
    var opt = {
        chart: {
          type: 'bar',
          height:'200px',
          backgroundColor:"#252c48"
        },
        title: {
          text: 'Following',
          style:{
              color:"white"
          }
        },
        xAxis:{
            title: {
                text: '',
                style: {
                    color:'blue'
                }
            },
            categories:categories,
            scrollbar:
            {
                enable:true,
                
                
            }
        },
        yAxis:{
            title: {
                text: '',
                style: {
                    color:'blue'
                },
                gridLineWidth:'10px'
            },
            label:{
                overflow:"allow"
            }
        },
        series: [
            {   name: '',
            data:data
            },
            
    
        ],
    };
return opt;}
function getdata2(d)
{
            var categories=[];
            var data=[];
            d.forEach(d=>
            {
                categories.push(d.name);
                data.push(d.public_repos);
            });
    var opt = {
        chart: {
          type: 'bar',
          height:'200px',
          backgroundColor:"#252c48"
        },
        title: {
          text: 'Public Repo',
          style:{
              color:"white"
          }
        },
        xAxis:{
            title: {
                text: '',
                style: {
                    color:'blue'
                }
            },
            categories:categories,
            scrollbar:
            {
                enable:true,
                
                
            }
        },
        yAxis:{
            title: {
                text: '',
                style: {
                    color:'blue'
                },
                gridLineWidth:'10px'
            },
            label:{
                overflow:"allow"
            }
        },
        series: [
            {   name: '',
            data:data
            },
            
    
        ],
    };
return opt;}
function getdata3(d)
{
            var categories=[];
            var data=[];
            d.forEach(d=>
            {
                categories.push(d.name);
                data.push(d.public_gists);
            });
    var opt = {
        chart: {
          type: 'bar',
          height:'200px',
          backgroundColor:"#252c48"
        },
        title: {
          text: 'Public Gist',
          style:{
              color:"white"
          }
        },
        xAxis:{
            title: {
                text: '',
                style: {
                    color:'blue'
                }
            },
            categories:categories,
            scrollbar:
            {
                enable:true,
                
                
            }
        },
        yAxis:{
            title: {
                text: '',
                style: {
                    color:'blue'
                },
                gridLineWidth:'10px'
            },
            label:{
                overflow:"allow"
            }
        },
        series: [
            {   name: '',
            data:data
            },
            
    
        ],
    };
return opt;}
function Statistic(props) {
    var followers=getdata(props.data)
    var following=getdata1(props.data)
    var repo=getdata2(props.data)
    var gist=getdata3(props.data)
    return(
    <div styles={{height:"100px"}}>
        <div style={{marginRight:"15px",marginBottom:"35px"}}>
        <HighchartsReact highcharts={Highcharts} options={followers} />
        <br></br>
        <HighchartsReact highcharts={Highcharts} options={following} />
        <br></br>
        <HighchartsReact highcharts={Highcharts} options={repo} />
        <br></br>
        <HighchartsReact highcharts={Highcharts} options={gist} /></div>
    </div>
        );}
    export default Statistic;