export default async function TodoDelete(id: string) {
  await fetch(`http://localhost:3050/todos/${id}`, {
    method: "DELETE",
  });
}
