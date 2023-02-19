const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h3", {}, `Is: ${props.accupation}`),
  ]);
};

const App = () => {
  return React.createElement("div", { className: "app" }, [
    React.createElement(
      "h1",
      { className: "title" },
      "React.js is Rendered!!!"
    ),
    React.createElement(
      Person,
      { name: "Omid", accupation: "Front-end Developer" },
      null
    ),
    React.createElement(Person, { name: "Navid", accupation: "Student" }, null),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
