import React,{Component} from 'react'
export default class Table extends Component{
    constructor(props){
        super(props);
            this.State={
               StudentDetails:[{sno:1,sname:"job",technology:"web developper"},
                    {sno:2,sname:"joe",technology:"fullstackdeveloper"},
                    {sno:3,sname:"mark",technology:"backendddeveloper"},
                 ]
            }  
    }
    render(){
        const {StudentDetails} =this.State;
        return(
            <div>
                <table border="1">
                    <tr>
                        <th>Student no</th>
                        <th>Student name</th>
                        <th>Technology</th>
                    </tr>
                      {StudentDetails.length>0 && StudentDetails.map((Student)=>{
                        return <tr key={Student.sno}>
                        <td>{Student.sno}</td>
                        <td>{Student.sname}</td>
                        <td>{Student.technology}</td>
                    </tr> 
                        })}
                </table>
            </div>
        )
    }
               
}