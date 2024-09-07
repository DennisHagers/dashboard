import { sql } from "@vercel/postgres";

// Define a type for the query parameters
type QueryParams = string | number | boolean | null | undefined;

export async function query(text: string, params: QueryParams[] = []) {
  try {
    const result = await sql.query(text, params);
    return result;
  } catch (error) {
    console.error("Error executing query", error);
    throw error;
  }
}

// You can add more database utility functions here as needed
