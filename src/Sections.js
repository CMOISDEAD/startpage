import { useState } from "react";

import { Container } from "./Sections.style";
import { ModalWindow } from "./Components/Modal/ModalSection";

export const Section = ({ data }) => {
  const Storage = window.localStorage;
  const [info, setInfo] = useState({
    id: data.id,
    title: data.title,
    links: data.links,
  });
  const [newLink, setNewLink] = useState({
    id: info.id,
    name: "",
    url: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    const ctx = JSON.parse(Storage.getItem("sections"));
    if (ctx) {
      ctx[info.id].links.push({
        id: newLink.id,
        name: newLink.name,
        url: newLink.url,
      });
      Storage.clear("sections");
      Storage.setItem("sections", JSON.stringify(ctx));
    }
    setInfo({
      ...info,
      links: [...info.links, newLink],
    });
  };

  const handleChange = (e) => {
    setNewLink({
      ...newLink,
      id: info.links.length,
      [e.target.name]: e.target.value,
    });
    console.log(newLink);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    // TODO: import ctx and filer the item to remove.
  };

  return (
    <Container>
      <div key={info.id}>
        <div className="header fw-bolder p-2 text-white">
          {info.title}
          <ModalWindow handleChange={handleChange} callback={handleClick} />
        </div>
        <ul>
          {info.links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.url} className="link-primary">
                  {link.name}
                </a>
                <button
                  className="btn text-white"
                  name={link.name}
                  id={link.url}
                  onClick={handleRemove}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};
