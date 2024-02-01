import React,{useEffect,useRef,MutableRefObject,useState} from 'react';
import { Link } from 'react-router-dom';
import { search_list } from './ProductLists';
import { srch } from '../../assets/Shareimg';

const Nav_search =()=>{
    const [search_val,setSearch_val]=useState<string>()
    const [search_val_link,setSearch_val_link]=useState<string>()
    let newlist: (Element | null);

useEffect(() => {
  newlist = document.querySelector('.autocom-list2');
}, []);

const search2 = (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.currentTarget.value;
  // Clear innerHTML of all lists
    if(newlist) newlist.innerHTML = '';
  
  if (inputValue.trim().length !== 0) {
    search_list.forEach(dic => {
      dic.NAME.forEach((name: string) => {
        if (name.includes(inputValue)) {
          const listElement = document.createElement('li');
          listElement.className = "search-elements";
          listElement.textContent = name;

          listElement.addEventListener('click', () => {
            setSearch_val(name);
            setSearch_val_link(dic.LINK);
              if(newlist) newlist.innerHTML = '';
          });

          // Append the element to each list
            if(newlist) newlist.appendChild(listElement);
        }
      });
    });
  }
};

  return (
    <>
    <div className='search_input'>
        <input onChange={search2} className='input_text'  type="search"  value={search_val} placeholder='Type to search..' />
        <Link to={`${search_val_link}`} className='search_btn' ><img className='w-[22px]' src={srch} alt="o\" /></Link>
    </div>
    <div className='autocom-box2'>
        {/*-- here list is inserted from JavaScript --*/}
        <ul className="autocom-list2"></ul>
    </div>
</>
  )
}
const Search_bar = () => {
    const [search_val,setSearch_val]=useState<string>()
    const [search_val_link,setSearch_val_link]=useState<string>()
    let newlist: (Element | null);

useEffect(() => {
  newlist = document.querySelector('.autocom-list');
}, []);

const Search = (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.currentTarget.value;
  // Clear innerHTML of all lists
    if(newlist) newlist.innerHTML = '';
  
  if (inputValue.trim().length !== 0) {
    search_list.forEach(dic => {
      dic.NAME.forEach((name: string) => {
        if (name.includes(inputValue)) {
          const listElement = document.createElement('li');
          listElement.className = "search-elements";
          listElement.textContent = name;

          listElement.addEventListener('click', () => {
            setSearch_val(name);
            setSearch_val_link(dic.LINK);
              if(newlist) newlist.innerHTML = '';
          });

          // Append the element to each list
            if(newlist) newlist.appendChild(listElement);
        }
      });
    });
  }
};


  return (
    <>
    <div className='search_input'>
        <input onChange={Search} className='input_text'  type="search"  value={search_val} placeholder='Type to search..' />
        <Link to={`${search_val_link}`} className='search_btn' ><img className='w-[22px]' src={srch} alt="o\" /></Link>
    </div>
    <div className='autocom-box'>
        {/*-- here list is inserted from JavaScript --*/}
        <ul className="autocom-list"></ul>
    </div>
</>
  )
}
/*==================================phone======================*/
const Phone_srch =()=>{
    const [search_val,setSearch_val]=useState<string>()
    const [search_val_link,setSearch_val_link]=useState<string>()
    let newlist: (Element | null);
    
let close_search: MutableRefObject<HTMLDivElement | null> = useRef(null);

useEffect(() => {
  newlist = document.querySelector('.autocom-list3');
  close_search.current = document.querySelector('.search_area');
}, []);

const Search3 = (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.currentTarget.value;
  // Clear innerHTML of all lists
    if(newlist) newlist.innerHTML = '';
  
  if (inputValue.trim().length !== 0) {
    search_list.forEach(dic => {
      dic.NAME.forEach((name: string) => {
        if (name.includes(inputValue)) {
          const listElement = document.createElement('li');
          listElement.className = "search-elements";
          listElement.textContent = name;

          listElement.addEventListener('click', () => {
            setSearch_val(name);
            setSearch_val_link(dic.LINK);
              if(newlist) newlist.innerHTML = '';
          });

          // Append the element to each list
            if(newlist) newlist.appendChild(listElement);
        }
      });
    });
  }
};
const closeSrch=()=>{
     
     setTimeout(()=>{
      setSearch_val('');
      if(close_search.current) close_search.current.classList.remove("flex");
     },500)
}
  return (
    <>
    <div className='search_input'>
        <input onChange={Search3} className='input_text'  type="search"  value={search_val} placeholder='Type to search..' />
        <Link to={`${search_val_link}`} className='search_btn' ><img onClick={closeSrch} className='w-[22px]' src={srch} alt="o\" /></Link>
    </div>
    <div className='autocom-box2'>
        {/*-- here list is inserted from JavaScript --*/}
        <ul className="autocom-list3"></ul>
    </div>
</>
  )
}

export {Search_bar,Nav_search,Phone_srch}