const root = document.querySelector("#root");
const span = React.createElement(
  "span",
  {
    id: "sexy-span",
    class: "sexy-span",
    style: {
      color: "red",
    },
  },
  "Hello World! I am a span"
);

ReactDOM.render(span, root);
