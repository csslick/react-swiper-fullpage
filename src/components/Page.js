import bg1 from "../images/bg01.jpg";
import bg2 from "../images/bg02.jpg";
import bg3 from "../images/bg03.jpg";

export default function Page({ title, pageNum }) {
  const bgArr = [bg1, bg2, bg3];

  return (
    <section
      className="page"
      style={{
        backgroundImage: `url(${bgArr[pageNum]})`,
        backgroundSize: "cover",
        color: "white"
      }}
    >
      <div>
        <h1 className="fadeRight">{title}</h1>
        <p className="fadeLeft">lorem Ipsum</p>
      </div>
    </section>
  );
}
