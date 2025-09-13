import "./userAvatar.css"
function user(student)
{
    const titlsStyle={
        border:'3px solid',
        margin:'200px',
        padding:'50px'
    }
   
    return(
<div style={titlsStyle}>
    <img src=".cartoon.jpg" alt=".cartoon.jpg" />
<p className="name"> {student.name}</p>
<p className="roll">{student.roll}</p>
<p className="blood">{student.blood_group}</p>
<p className="dob">{student.dob}</p>





</div>


 )
}
export default user