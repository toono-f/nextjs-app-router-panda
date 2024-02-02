export default async function TodoGetData() {
  const response = await fetch("http://localhost:3050/todos");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}
