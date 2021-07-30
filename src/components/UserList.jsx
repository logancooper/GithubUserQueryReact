import { Link, useRouteMatch } from "react-router-dom";

const UserList = (props) => {
    const {url} = useRouteMatch();
    const userList = props.users;

    return (
        <>
            <h1>This is the users page</h1>
            <nav>
                {userList.map((user) => (
                <>
                    <Link to={`${url}/${user.login}`}>{user.name}</Link>
                    <br />
                </>
                ))}
            </nav>

        </>
    );
}

export default UserList;