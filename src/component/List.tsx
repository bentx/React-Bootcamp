import { useState } from 'react';

function List() {
  let country = ['India', 'USA', 'UK', 'Canada'];
  //country = [];
  //let selected = 0;
  const [selected, setSelected] = useState(0);
  return (
    <>
      {country.length === 0 && <h1>No Content</h1>}
      <ul className='list-group'>
        {country.map((item, index) => (
          <li
            onClick={(event) => {
              setSelected(index);
              console.log(selected);
            }}
            key={item}
            className={selected === index ? 'list-group-item active' : 'list-group-item'}>
            {item}
            {index}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
