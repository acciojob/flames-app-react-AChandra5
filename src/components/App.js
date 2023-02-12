import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {

  const relationshipStatus = {
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
    6: "Siblings"
  }

  const [str1, setStr1] = useState("")
  const [str2, setStr2] = useState("")

  // const [newStr1, setNewStr1] = useState("")
  // const [newStr2, setNewStr2] = useState("")

  const [isError, setisError] = useState(false)
  const [relation, setRelation] = useState("")

  const handleClear = () => {
    setStr1("")
    setStr2("")
    setRelation("")
  }





  function calculateRelationship() {
    if (!str1 || !str2) {
      setisError(true)
    }

    let newStr1 = ""
    let newStr2 = ""
    // if (str1.length < str2.length) {
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
          newStr1 = str1.replace(str1[i], "")
          newStr2 = str2.replace(str2[j], "")
          console.log("newstr1", newStr1)
          console.log("newstr2", newStr2)
          // return true
          let newLength = (newStr1.length + newStr2.length) % 6
          console.log(newLength)
          setRelation(relationshipStatus[newLength])
          console.log(relationshipStatus[newLength])
        }
      }
    }
    console.log(newStr1, newStr2)


    // let newLength = (newStr1.length + newStr2.length) % 6
    // console.log(newLength)
    // setRelation(relationshipStatus[newLength])
    // console.log(relationshipStatus[newLength])

  }

  return (
    <div id="main">
      <input data-testid="input1" value={str1}
        onChange={(e) => { setStr1(e.target.value) }}>
      </input> <br />
      <input value={str2} data-testid="input2" onChange={(e) => setStr2(e.target.value)}></input> <br />
      <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship Future</button>
      <button data-testid="clear" onClick={handleClear}>Clear</button>
      <h3 data-testid="answer">
        {isError ? "Please Enter valid input" : relation}
      </h3>
    </div>
  )
}

export default App