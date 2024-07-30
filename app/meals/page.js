import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>
        <Link href="/community">Go to community</Link>
      </h1>
      <p>
        <Link href="/meals/meal-1">Meal - 1</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">Meal - 2</Link>
      </p>
      <p>
        <Link href="/meals/meal-3">Meal - 3</Link>
      </p>
    </main>
  );
}
