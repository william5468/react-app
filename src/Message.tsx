function Message() {
  const name = "";
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World{name}</h1>;
}

export default Message;
