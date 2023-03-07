import "./main.css";
import {useState} from "react";
function palindrome(str) {
    if(str=="")
    return "Enter a String";
    str=str.toLowerCase();
    let tmp="";
    for(let i=0;i<str.length;i++)
      {
          if((str[i]>='a'&&str[i]<='z')||(str[i]>=0&&str[i]<=9))
            {
                tmp=tmp+str[i];
            }
      }
      console.log(tmp);
      tmp=tmp.replace(/\s+/g, '');
      console.log(tmp);
      let rev="";
      for(let j=tmp.length-1;j>=0;j--)
      {
        rev=rev+tmp[j];
      }
      if(rev!=tmp)
      return "Not a palindrome";
  
    return "Palindrome";
  }
const Home=()=>{
    const [inputt,setRes]=useState("");
    const [result,setResult]=useState("");

    const handleinput=(event)=>{
        const textinput=event.target.value;
        setRes(textinput);
    };

    const clearInput = () => {
        document.getElementById("input").value = "";
      };

      const clear=()=>{
        const cleart=document.getElementById("input").value;
        setRes(cleart);
        setResult(cleart);
        clearInput();
      }

    const handlesubmit =(event)=>{
        event.preventDefault();
        const inputval=document.getElementById("input").value;
        const output=palindrome(inputval);
        setRes(inputval);
        setResult(output);
        clearInput();
    };

    return(
        <div className="home">
            <div className="card">
            <div className="heading">
                <span>Palindrom Checker</span>
                <span className="description">It removes whitespace & special characters</span>
            </div>
            <div className="form">
                <input type="text" id="input" placeholder="Enter String you want to check"></input>
                <button onClick={handlesubmit}>Submit</button>
                <div className="entered">
                    <span>Entered String</span>
                    <div className="inputtext">"{inputt}"</div>
                </div>
                <div className="output">{result}</div>
                <button onClick={clear}>Clear</button>
            </div>
            </div>
        </div>
    )
}

export default Home;
