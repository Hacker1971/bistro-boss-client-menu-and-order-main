import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";


const AllUsers = () => {
    const {data: users = [],refetch} = useQuery(['users'], async () =>{
        const res = await fetch("http://localhost:5000/users")
        return res.json()
    })

    const handleDelete = () =>{

    }
    return (
        <div>
            aluser {users.length}
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {users.map((user,index) => <tr key={user._id}>
         <th>{index + 1}</th>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>Blue</td>
         <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
       </tr>)}
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;