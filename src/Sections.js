import { useState, useEffect } from 'react';

import { Container } from './Sections.style';

export const Section = ({ data }) => {
  const Storage = window.localStorage;
  const [info, setInfo] = useState({
    id: data.id,
    title: data.title,
    links: data.links
  })
  const [newLink, setNewLink] = useState({
    id: info.id,
    name: '',
    url: ''
  });

  useEffect(() => {
    const ctx = JSON.parse(Storage.getItem('sections'));
  }, [info])

  const handleClick = (e) => {
    e.preventDefault();
    const ctx = JSON.parse(Storage.getItem('sections'));
    if (ctx) {
      ctx[info.id].links.push({
        id: newLink.id,
        name: newLink.name,
        url: newLink.url
      });
      Storage.clear('sections');
      Storage.setItem('sections', JSON.stringify(ctx));
    }
    setInfo({
      ...info,
      links: [...info.links, newLink],
    })
  }

  const handleChange = (e) => {
    setNewLink({
      ...newLink,
      id: info.links.length,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <div key={info.id}>
        <div className="header"> {info.title}</div>
        <ul>
          {
            info.links.map((link, i) => {
              return (
                <li key={i}><a href={link.url}>{link.name}</a></li>
              )
            })
          }
          <p className="text-muted">Add new link...</p>
          <li><input type="text" name='name' placeholder='name' onChange={handleChange} /></li>
          <li><input type="text" name='url' placeholder='url' onChange={handleChange} /></li>
          <li className='add'><a href="/" className='add' onClick={handleClick}>+ Add</a></li>
        </ul>
      </div>
    </Container >
  )
}

