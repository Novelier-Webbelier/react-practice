const root = document.querySelector("#root");

const h3 = React.createElement(
  "h3",
  {
    id: "title",
    onMouseEnter: () => console.log("Mouse enter")
  },
  "Hello World! I am a span"
);

const btn = React.createElement(
  "button",
  {
    onClick: () => console.log("I am clicked"),
    style: {
      color: "tomato",
    }
  },
  "Click me"
)

const container = React.createElement("div", null, [h3, btn]);

ReactDOM.render(container, root);
