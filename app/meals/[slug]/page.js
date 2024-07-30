import Link from "next/link";

export default function MealPost({ params }) {
  return (
    <main>
      <p>Meal</p>
      <p>
        <Link href="/meals">Go to Meals Page</Link>
      </p>
    </main>
  );
}
