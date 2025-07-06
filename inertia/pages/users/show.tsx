import { Head } from "@inertiajs/react";
import User from "#models/user";    

export default function UserShow({ user }: { user: User }) {
  return (
    <>
      <Head title={`User: ${user.name}`} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">User Details</h1>
        <p className="mb-4">
          This is the details page for user <strong>{user.name}</strong>.
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Email:</strong> {user.email}</li>
        </ul>
      </div>
    </>
  );
}