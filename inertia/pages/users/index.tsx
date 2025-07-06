import { Head } from "@inertiajs/react";
import User from "#models/user";
export default function Users({ users }: { users: User[] }) {
  return (
    <>
        <Head title="Users" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <p className="mb-4">
          This is the users page. You can manage your users here.
        </p>
        {          users && users.length > 0 ? (
          <ul className="list-disc pl-5">
            {users.map((user) => (
              <li key={user.id} className="mb-2">
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </>
  );
}