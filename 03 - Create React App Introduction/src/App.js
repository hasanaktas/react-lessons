import { useMemo, useState } from "react";
import { users } from "./exampleData";

function App() {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleClick = (e) => {
    let oldSelectedUsers = [...selectedUsers];

    if (oldSelectedUsers.includes(e)) {
      oldSelectedUsers = oldSelectedUsers.filter((user) => user.id !== e.id);
    } else {
      oldSelectedUsers.push(e);
    }
    setSelectedUsers(oldSelectedUsers);
  };

  const ages = useMemo(() => {
    let totalAges = 0;

    selectedUsers.forEach((user) => {
      totalAges += new Date().getFullYear() - user.birthday;
    });

    return totalAges;
  }, [selectedUsers]);

  return (
    <div className="flex flex-col gap-2 items-center">
      {users.map((user, index) => {
        const isSelected = selectedUsers.includes(user);

        return (
          <button
            onClick={() => handleClick(user)}
            key={user.id}
            className={` text-white transition-colors  rounded-lg p-5 ${
              isSelected ? "bg-pink-500" : "bg-slate-600"
            }`}
          >
            {user.name}
          </button>
        );
      })}
      <div>
        <h6>Total Ages : {ages}</h6>
      </div>
    </div>
  );
}

export default App;
