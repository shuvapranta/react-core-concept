export default function User({user}){
    const {name, id ,email} = user;
    return (
        <div className="box">
            <h3>User Name: {name}</h3>
            <p>User Id :{id}</p>
            <p>Email: {email}</p>
        </div>
    )
}