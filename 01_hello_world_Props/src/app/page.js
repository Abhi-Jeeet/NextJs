import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <User name = "Abhijeet"/>
        <User name = "Mohit"/>
        <Details age="18" address="chatra" />

      </main>
      
    </div>
  );
}

const User = (props)=>{
  return(
    <div>
      <h1>This is {props.name}</h1>
    </div>
  )
}

const Details = (props)=>{
  return(
    <div>
      <p>
        My age is {props.age}, and i live in {props.address}.
      </p>
    </div>
  )
}
