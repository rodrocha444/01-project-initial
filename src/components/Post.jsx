import styles from './Post.module.css';

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/rodrocha444.png"/>
          <div className={styles.authorInfo}>
            <strong>Rodrigo Rocha</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="4 de Junho de 2022" dateTime='2022-06-04 10:10:00'>Publicado a 1h</time>
      </header> 

      <div className={styles.content}>
        <p>Teste 1</p>
        <p>tedt 2 </p>
        <p>ssss</p>
      </div>
    </article>
  )
}