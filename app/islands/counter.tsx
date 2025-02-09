import { useState } from 'hono/jsx'

export default function Counter({ start = 0 }: { start?: number }) {
  const [count, setCount] = useState(start)
  return (
    <div class="uppercase">
      <p>count: {count}</p>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        class="bg-fuchsia-300 text-white p-2 uppercase hover:bg-black hover:text-white"
      >
        increment
      </button>
    </div>
  )
}
