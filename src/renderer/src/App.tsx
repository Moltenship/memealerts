function App(): JSX.Element {
  return (
    <div>
      <h1>TEST</h1>
      <button
        onClick={async () => {
          const response = await fetch(
            '/alerts/64b2779e05b8e6cffe9afd14/29d29391-e995-4645-9321-671f219319da/alert.webm'
          ).then((res) => res.blob())
          const arrayBuffer = await response.arrayBuffer()
          window.api.copy(arrayBuffer)
        }}
      >
        test
      </button>
    </div>
  )
}

export default App
