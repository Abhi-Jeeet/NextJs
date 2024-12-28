'use client'

export default function Home() {
  const aalert = (items)=>{
    alert(items);
  }
  return (
    <>
    <div>
      <h1>
        Events, functions and state
      </h1>
      <br/>
      <button onClick={()=>aalert("hello")} >Click me</button>
    </div>
    </>
  );
}
