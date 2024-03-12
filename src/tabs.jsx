import { useState } from "react";


function Tabs({tabscontent,onChange}){
    
     const[currentTabIndex,setcurrentTabIndex] = useState(0);

     function handleOnClick(getCurrentIndex){
        setcurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex);
     }
    return (
        <>
            <div className="wrapper">
                <div className="heading">
                    {tabscontent.map((tabItem,index) => (
                        <div className={`tabs-item ${currentTabIndex === index ? 'active' :""}`} onClick={()=> handleOnClick(index)} key={tabItem.label}>
                            <span className="label">{tabItem.label}</span>
                        </div>
                    ))}
                </div>
                <div className="content" style={{color:'red'}}>
                   {tabscontent[currentTabIndex] && tabscontent[currentTabIndex].content}
                </div>
            </div>
        </>
    )
}
export default Tabs;