import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          <Post
            author="Rodrigo Rocha"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo mollitia laudantium, beatae doloremque magnam accusamus ad aut eos eveniet culpa? Porro ducimus reprehenderit labore tempora assumenda beatae, quam ut praesentium officia ab repellat nemo ullam nisi officiis facilis omnis molestias, eligendi libero commodi. Facilis aliquam doloremque quaerat laborum facere!"
          />
          <Post
            author="Teste 2"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo mollitia laudantium, beatae doloremque magnam accusamus ad aut eos eveniet culpa? Porro ducimus reprehenderit labore tempora assumenda beatae, quam ut praesentium officia ab repellat nemo ullam nisi officiis facilis omnis molestias, eligendi libero commodi. Facilis aliquam doloremque quaerat laborum facere!"
          />
        </main>

      </div>
    </>
  )
}

export default App
