import { Head } from "@inertiajs/react";

export default function About() {
  return (
    <>
      <Head title="About" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to our application! We are dedicated to providing the best
          experience for our users.
        </p>
        <p>
          Our team is committed to continuous improvement and innovation. Thank
          you for being a part of our journey!
        </p>
      </div>
    </>
  );
}