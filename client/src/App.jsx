import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const form = e.target

    const data = new FormData(form)

    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: data.get('prompt'),
      }),
    })

    console.log(response)
    form.reset()
  }

  return (
    <div id="app">
      <div id="chat_container"></div>

      <form onSubmit={handleSubmit}>
        <textarea
          name="prompt"
          cols="1"
          rows="1"
          placeholder="想问郑翔什么呢？"
        ></textarea>
        <button type="submit">
          <img src="../public/send.svg" alt="send" />
        </button>
      </form>
    </div>
  )
}

export default App
