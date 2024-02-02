export default async function TodoEdit(id: string, editTitle: string) {
  const response = await fetch(`http://localhost:3050/todos/${id}`, {
    method: "PATCH", // または 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo: { title: editTitle } }),
  });
  return response;
}
