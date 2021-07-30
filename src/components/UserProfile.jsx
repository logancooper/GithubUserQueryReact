import { useParams } from "react-router-dom";

const UserProfile = (props) => {
    console.log("Rendering a User Profile");
    const { username } = useParams();
    let user = null;
    props.users.forEach(u => {
        if(u.login === username)
        {
            user = u;
        }
    });
    if(user != null)
    {
        return (
            <>
                <h1>
                    {user.name}
                </h1>
                <p>
                    {user.login}
                </p>
            </>
        );
    }
    else
    {
        return (
            <>
                <p>
                    Could not find user in userslist!
                </p>
            </>
        );
    }
    


}

export default UserProfile;