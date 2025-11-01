import Link from "next/link";

export default function ShareMealsPage() {
  return (
    <main>
      <h1>Share Meals</h1>
      <p>
        <Link href="/meals">Back to Meals</Link>
      </p>
    </main>
  );
}
