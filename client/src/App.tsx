import { useEffect, useState } from "react";

interface IUser {
  name: string;
  id: number;
}

export const App = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {users.map(({ id, name }) => (
        <strong key={id}>{name}</strong>
      ))}
    </div>
  );
};
