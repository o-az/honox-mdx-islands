export default async function AsyncComponent() {
  const responses = await Promise.all(
    [1, 2, 3].map((id) =>
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .catch(),
    ),
  )
  const todos = responses.map((todo) => todo as { id: number; title: string })

  return (
    <div class="mt-2">
      <p class="sm:text-sm text-xs">
        Three Todos fetched from jsonplaceholder.typicode.com
      </p>
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
