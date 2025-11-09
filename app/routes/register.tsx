import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/register";
import { useFetcher, redirect } from "react-router";
import { createClient } from "~/lib/supabase-server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - IChTo 2026" },
    {
      name: "description",
      content: "Registration for International Chemistry Tournament 2026",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const { supabase } = createClient(request);
  let formData = await request.formData();
  let name = formData.get("name");
  let instructor = formData.get("instructor");
  let emailPrimary = formData.get("emailPrimary");
  let emailSecondary = formData.get("emailSecondary");
  let country = formData.get("country");
  let school = formData.get("school");
  let numOfStudents = formData.get("numOfStudents");

  const { error } = await supabase.from("registration").insert({
    name: name,
    instructor: instructor,
    email: emailPrimary,
    email_secondary: emailSecondary,
    country: country,
    school: school,
    numOfStudents: numOfStudents,
  });
  if (error) return { error: error.message };
  return redirect("/problems?submitted");
}

export default function Register() {
  const fetcher = useFetcher();
  const today = new Date().getTime();
  const from = new Date("2025-11-09T00:00:00.000+09:00").getTime();
  const to = new Date("2025-11-10T00:00:00.000+09:00").getTime();
  console.log(today, from, to);
  return (
    <div className="min-h-screen">
      <HeroImage title="Register" imageUrl="/register_page.jpg" />
      <div className="container mx-auto px-4 mb-16 text-md md:text-2xl">
        {today >= from && today <= to ? (
          <fetcher.Form
            method="post"
            className="max-w-4xl mx-auto text-left text-gray-600 flex flex-col space-y-4 md:space-y-10"
          >
            <p>Team Name</p>
            <input name="name" type="text" className="input" required />
            <p>Team Instructor</p>
            <input
              name="instructor"
              type="text"
              className="input"
              placeholder="John Doe"
              required
            />
            <div>
              <p>Email Address (primary)</p>
              <p className="text-lg text-gray-500 mt-4">
                We will request your students' information, participation fee
                deposit details, and other relevant information via email around
                March 2026.
              </p>
            </div>
            <input
              name="emailPrimary"
              type="email"
              className="input"
              placeholder="you@example.com"
              required
            />
            <p>Email Address (secondary)</p>
            <input
              name="emailSecondary"
              type="email"
              className="input"
              placeholder="you@example2.com"
              required
            />
            <p>Country</p>
            <input name="country" type="text" className="input" required />
            <p>Affiliated school</p>
            <input name="school" type="text" className="input" required />
            <p>Number of Students</p>
            <input
              name="numOfStudents"
              type="number"
              min="4"
              max="6"
              className="input"
              placeholder="4 to 6 Members (ex: 4)"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 text-white px-5 py-2 rounded-xl max-w-45 mt-8"
            >
              {fetcher.state === "idle" ? "Submit" : "Submitting..."}
            </button>
            {fetcher.data?.error && (
              <p className="text-red">{fetcher.data?.error}</p>
            )}
          </fetcher.Form>
        ) : (
          <p className="text-xl text-center text-gray-600 mb-8">
            This is not the registration period.
          </p>
        )}
      </div>
    </div>
  );
}
