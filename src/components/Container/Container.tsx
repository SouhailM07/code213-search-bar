// hooks
import { useState, useRef } from "react";

export default function Container() {
  let arr = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];
  let [list, setList] = useState([...arr]);
  //
  let inputRef: any = useRef(null);
  return (
    <>
      <div className="bg-blue-500 w-[60rem] flex flex-col items-center">
        <div className="flex">
          <label htmlFor="search_bar" className="text-[2rem] mr-4">
            Search :
          </label>
          <input
            id="search_bar"
            ref={inputRef}
            type="text"
            className="input"
            onChange={() => {
              let newList = arr.filter((e, i) => {
                return e
                  .toLowerCase()
                  .includes(inputRef.current.value.toLowerCase());
              });
              setList([...newList]);
            }}
          />
        </div>
        <ul className="">
          {list.map((e, i) => {
            return (
              <li className="text-white my-[1.3rem] text-[2rem] " key={i}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
