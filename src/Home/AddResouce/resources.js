import React, {useState,useEffect} from 'react'
import db from '../../firebase' 
import Select from 'react-select';

function Resource() {
    const [name,setname] = useState("")
    const [address,setaddress] = useState("")
    const [number,setnumber] = useState("")
    const [resource,setresource] = useState("")
    const [whatsapp,setwhatsapp] =useState("")
    const [city, setcity] = useState("");
    
    const data = [
      {value: 1,label: "Dehli"},
      {value: 2,label: "Mumbai"},
      {value: 3,label: "Chennai"},
      {value: 4,label: "Kolkata"},
      {value: 5,label: "Lucknow"},
      {value: 6,label: "Kanpur"},
      {value: 7,label: "Bhopal"},
      {value: 8,label: "Indore"},
      {value: 9,label: "Others"}
    ];
    
    const data1 = [
      {value: 1,label: "oxygen"},
      {value: 2,label: "ambulance"},
      {value: 3,label: "plasma"},
      {value: 4,label: "medicine"},
      {value: 5,label: "covidtestcenter"}
    ];

    const handleChange = e => {
      setcity(e);
    }

    const handleChangeresource = f => {
      console.log(f)
      setresource(f);
    }

    const newMessage = () => {
         
        console.log(name," ",address," ",number," ",resource," ",whatsapp)
        if ((name.trim() !== "") && (address.trim !== "") && (number.trim !== "") && (resource.trim !== "") && (whatsapp.trim !== "") && (city !== "")) {
          db.collection(resource.label).add({
            name: name,
            address: address,
            resource: resource,
            whatsapp: whatsapp,
            number: number,
            city:city.label
          });
          setname("");
          setaddress("");
          setnumber("");
          setresource("");
          setwhatsapp("");
          setcity("");
        }
      };

    return (
        <div className="resource">
          
            <div className="header">
              Add Resources <br/><br/>
                <fieldset><br/>
                    <label for="name">Provider Name: </label>
                    <input type="text" id="name" required name="name" onChange={(event) => setname(event.target.value)} value={name} /><br/><br/>
                    <label for="address">Provider Address: </label>
                    <input type="text" id="address" required name="address" onChange={(event) => setaddress(event.target.value)} value={address} /><br/><br/>
                    <label for="address">Provider Contact: </label>
                    <input type="text" id="number" name="number" onChange={(event) => setnumber(event.target.value)} value={number} /><br/><br/>
                    <div style={{margin:'0rem 0.9rem'}}>
                    <Select
                    placeholder="Select City"
                    value={city}
                    options={data}
                    onChange={handleChange} /><br/>
                    </div>
                    <label for="address">Provider Whatsapp: </label>
                    <input type="text" id="whatsapp" name="whatsapp" onChange={(event) => setwhatsapp(event.target.value)} value={whatsapp}/><br/><br/>
                    <div style={{margin:'0rem 0.9rem'}}>
                    <Select
                    placeholder="Select Resource"
                    value={resource}
                    options={data1}
                    onChange={handleChangeresource} />
                    </div><br/>

                    <button className="button"  variant="contained" onClick={newMessage}>Submit</button>
                    <br/><br/>
        </fieldset>
            </div>
        </div>
    )
}

export default Resource;