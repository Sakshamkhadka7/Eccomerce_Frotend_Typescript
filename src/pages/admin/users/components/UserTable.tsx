import { useState } from "react";
import { deleteUser, type IUser } from "../../../../store/adminUserSlice";
import { useAppDispatch } from "../../../../store/hook";

const UserTable = ({ users }: { users: IUser[] }) => {

    const [searchItem,setSearchItem]=useState<string>("");
 
    const dispatch=useAppDispatch();

    const deleteUsersById=(id:string)=>{
       if(id){
         dispatch(deleteUser(id))
       }
    }

    const filterUsers=users.filter((user)=> user.username.toLowerCase().includes(searchItem) || user.email.toLowerCase().includes(searchItem))



  return (
    <div>
      <div>
        <div className="flex justify-between items-center ">
          <div>
            <input
            onChange={(e)=> setSearchItem(e.target.value)}
              className="mx-4  border rounded-md px-4 py-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Name
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Email
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filterUsers.length > 0 &&
              filterUsers.map((user) => {
                return (
                  <tr key={user.userId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.userId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                        Edit
                      </button>
                      <button onClick={()=> deleteUsersById(user.userId)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
