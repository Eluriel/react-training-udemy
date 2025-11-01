import Link from "next/link";

export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meal Details</h1>
      <p>{params.mealSlug}</p>
      <p>
        <Link href="/meals">Back to Meals</Link>
      </p>
    </main>
  );
}
