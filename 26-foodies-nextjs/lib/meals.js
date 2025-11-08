import sql from "better-sqlite3";
import * as Minio from "minio";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

const minioClient = new Minio.Client({
  endPoint: "localhost",
  port: 9900,
  useSSL: false,
  accessKey: "minioAccessKey",
  secretKey: "minioSecretKey",
});

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  minioClient.putObject(
    "foodies-nextjs",
    fileName,
    Buffer.from(bufferedImage),
    meal.image.size,
    { "Content-Type": meal.image.type }
  );

  meal.image = fileName;

  db.prepare(
    `
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `
  ).run(meal);
}
