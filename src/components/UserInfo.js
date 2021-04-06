import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";

import { ALL_USER_INFO, USER_INFO } from "./Queries";

function UserInfo(props) {
  const { loading, error, data } = useQuery(ALL_USER_INFO);
  const params = props.urlParameter;

  const handleUserClick = (user) => {
    params.history.push(`/user/${user.id}`);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <li onClick={() => handleUserClick(user)} key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
  //console.log(data.users[0].name);
  //return <div>Hello</div>;
}
export function SpecificUserInfo() {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data } = useQuery(USER_INFO, {
    variables: {
      id: id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:(</p>;
  console.log(data);
  return (
    <div>
      <h1>{data.users_by_pk.name}</h1>
    </div>
  );
}
export default UserInfo;
