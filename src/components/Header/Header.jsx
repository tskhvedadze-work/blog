import "./header.css";

export function Header({ title, subtitle, color }) {
  // {title:"სათაური",subtitle:"ქვესათაური",color:"წითელი"}

  // ეს ჩანაწერი და ამის ქვემოთ რაც წერია იდენტურია
  // const { title, subtitle, color } = props;

  // ეს ჩანაწერი და ამის ზემოთ რაც წერია იდენტურია
  // const title = props.title;
  // const subtitle = props.subtitle;
  // const color = props.color;

  return (
    <header className="header" style={{ backgroundColor: color }}>
      <h1>{title}</h1>
      <h3>
        {subtitle}
        <b>bold text</b>
      </h3>
    </header>
  );
}

// function Header(props) {
//   const header = document.createElement("header");
//   header.classList.add("header");

//   const h1 = document.createElement("h1");
//   h1.textContent = props.title;
//   const h3 = document.createElement("h3");
//   h3.textContent = props.subtitle;

//   const bold = document.createElement("b");
//   bold.textContent = "es aris bold";
//   h3.append(bold);

//   header.append(h1, h3);
// }
