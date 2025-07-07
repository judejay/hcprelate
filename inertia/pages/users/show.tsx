import { Head } from "@inertiajs/react";
import User from "#models/user";    
import Contact from "#models/contact";

export default function UserShow({ user, contacts }: { user: User; contacts: Contact[] }) {
   
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
        <div className="mt-6">
            {contacts && contacts.length > 0 ? (
                contacts.map((friend) => (
                    <div key={friend.id} className="mb-4">
                        <h2 className="text-xl font-semibold">{friend.name}</h2>
                    </div>
                ))
            ) : (
                <div>   
                    
                    <p className="text-gray-500">No contacts found for this user.</p>

      </div>
            )}
        </div>

        </div>
  );
    </>
    );
}