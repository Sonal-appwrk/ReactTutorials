import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";
import { Table } from "antd";

import { ALL_USER_INFO, USER_INFO, COUNT_USER } from "./Queries";
const { Column } = Table;
function UserInfo(props) {
  const { loading, error, data } = useQuery(ALL_USER_INFO);
  // const params = props.urlParameter;
  // const handleUserClick = (user) => {
  //   params.history.push(`/user/${user.id}`);
  // };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
    {/* pagination={false} use it if you dont want pagination */}
      <Table dataSource={data.users}   >  
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Rocket" dataIndex="rocket" key="rocket" />
        <Column title="Timestamp" dataIndex="timestamp" key="timestamp" />
      </Table>
      {/* <table>
      <thead>
        <th>Name</th>
        <th>Rocket</th>
        <th>Twitter</th>
        <th>timestamp</th>
      </thead>
      <tbody>

        {data.users.map((user) => (
  
          <tr  key={user.id}>
            <td onClick={() => handleUserClick(user)}>
              {user.name}
            </td>
            <td> {user.rocket}</td>

            <td> {user.twitter}</td>

            <td> {user.timestamp}</td>
          </tr>
          
        ))}
        </tbody>
      </table> */}
      {/* {data.users} */}
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

export function CountUser() {
  const { loading, error, data } = useQuery(COUNT_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h1>Total Users : {data.users_aggregate.aggregate.count}</h1>
    </div>
  );
}
export default UserInfo;
