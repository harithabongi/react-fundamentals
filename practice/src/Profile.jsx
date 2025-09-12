function Profile(){
    const name="haritha"
    const age=18
    const isstudent=true
return(
<div>
    <p>name:{name}</p>
    <p>age:{age}</p>
<p>{isstudent===true?"i'm a student":"i'm not a student"}</p>

</div>

)
}
export  default Profile;
