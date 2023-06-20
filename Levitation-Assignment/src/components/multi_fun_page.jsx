import { useState , useEffect} from "react"
import './multi_fun_page.css'

import { UserDetails } from "./page3/user_details"
import { UserAddress } from "./page3/user_address"
import { FileUpload } from "./page3/file_upload"
import { MultiFileUpload } from "./page3/multi_file_upload"
import { GeoLocation } from "./page3/geoLocation"





function ProgressBar1() {
  
    const [data,setData] = useState({
        username : "",
        email : "",
        phoneNum : "+91",
        address1 : "",
        address2 : "",
        city : "",
        state : "",
        pincode : "",
        country : "",
        file : "",
        files : "",
        location : "",
    })
    const [progress,setProgress] = useState(0)
    const [page,setPage] = useState(0)
    const [but,setBut] = useState("Next")
    const FormPages = ["User Info", "User Address", "File Upload1","File Upload2","Geo Location"];

   
   


    const pageHandler = () => {
        
            
            
            // console.log("User details" + inputData)
            
            
            if(page===0)
            {
                 return <UserDetails data={data} setData={setData} />
                // return <div>Hello</div>
            }
            else if(page===1)
            {
                return <UserAddress data={data} setData={setData}/>
            }
            else if(page===2)
            {
                return <FileUpload data={data} setData={setData}/>
            }
            else if(page===3)
            {
                return (<MultiFileUpload data={data} setData={setData}/>)
            }
            else if(page===4)
            {
                return (<GeoLocation data={data} setData={setData}/>)
            }
        

       
    }

    const submitHandler = () => {
        
    }



    return (
               
        
            
                <div className="con">
                    <div className="container">

                        <div className="progress-bar">
                            <div className="progress-fill" style={{width:`${progress}%`,backgroundColor:"rgb(79, 195, 241)"}}></div>
                        </div>

                        <div className="progress-label">{progress}%</div>
                    
                                <div className="pages">
                                    <h3>Fill the form</h3>
                                    {pageHandler()}
                                </div>
                            

                        <div >
                            <button className="buttons" id="previous" disabled={page == 0} onClick={() => { 
                                                                                                if(progress<=100)
                                                                                                {
                                                                                                    setBut("Next")
                                                                                                }
                                                                                                setPage(page-1);
                                                                                                setProgress(progress-20)
                                                                                            }}>Previous</button>

                            <button className="buttons" id="next" onClick={() => {
                                                                                    if (page === FormPages.length-1) {
                                                                                        setBut("Submit");
                                                                                        if(progress<100)
                                                                                        {
                                                                                            setProgress(progress+20)
                                                                                        }
                                                                                        if(progress==100)
                                                                                        {
                                                                                            submitHandler();
                                                                                        }

                                                                                    } else {
                                                                                            setPage(page+1);
                                                                                            setProgress(progress+20)
                                                                                    }}}>{but}</button>
                        </div>
                        
                        

                    </div>
                </div>
            
        
    )
  }

export default ProgressBar1;
