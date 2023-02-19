const App = () => {
  return React.createElement("dev", { className: "app" }, [
    React.createElement(
      "h1",
      { className: "title" },
      "React.js i   s Rendered!!!"
    ),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
