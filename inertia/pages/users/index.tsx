import { Head } from "@inertiajs/react";
import { useEffect } from "react";
export default function Users() {

  const getUsers =  () =>  {
    fetch('/api/users')
      .then(response => response.json())  
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }

  // Call the function to fetch users when the component mounts
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
        <Head title="Users" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <p className="mb-4">
          This is the users page. You can manage your users here.
        </p>
        <p>
          More features will be added soon!
        </p>
      </div>
    </>
  );
}