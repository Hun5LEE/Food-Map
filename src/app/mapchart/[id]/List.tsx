"use client";

import styles from "./list.module.css";
import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import PlaceDetails from "./PlaceDetails";

export default function List() {
  const [type, setType] = useState("음식점");
  const [rating, setRating] = useState("평점");
  const places = [
    { name: "Cool" },
    { name: "Beer" },
    { name: "Steak" },
    { name: "Cool" },
    { name: "Beer" },
    { name: "Steak" },
    { name: "Cool" },
    { name: "Beer" },
    { name: "Steak" },
  ];

  return (
    <>
      {/* <div style={{ height: "100px" }}>
        <Autocomplete>
          <div>
            <input placeholder="Search..." />
          </div>
        </Autocomplete>
      </div> */}
      <h2>{type}</h2>
      <div>
        {rating}
        <select>
          <option value="3.5">3.5 Up</option>
          <option value="4">4 Up</option>
          <option value="4.5">4.5 Up</option>
        </select>
      </div>
      <div>
        {places?.map((place, i) => {
          return (
            <div key={i}>
              <PlaceDetails place={place} />
            </div>
          );
        })}
      </div>
    </>
  );
}
