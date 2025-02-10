export default async function AsyncComponent() {
  const responses = await Promise.all(
    [1, 2, 3].map(async (id) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      )
      return response.json()
    }),
  )
  const todos = responses.map((todo) => todo as { id: number; title: string })

  return (
    <div class="mt-2">
      <p>Three Todos fetched from jsonplaceholder.typicode.com</p>
      <ul class="text-xs ml-12 mt-3">
        {todos.map((todo) => (
          <li key={todo.id}>
            <pre>{JSON.stringify(todo, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  )
}
