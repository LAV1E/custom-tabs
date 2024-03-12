import Tabs from "./tabs";


function Randomcomponent(){
    return <h1>Random content</h1>
}

function TabText(){
   
    const tabs = [
        {
            label:'Tab 1',
            content : <div>This istab 1</div>
        },
        {
            label:'Tab 2',
            content : <div>This is tab 2</div>
        },
        {
            label:'Tab 3',
            content: <Randomcomponent/>
        }
    ]

    function handleChange(currentTabsIndex){
        console.log(currentTabsIndex);
    }

    return <Tabs tabscontent={tabs} onChange={handleChange}/>
}

export default TabText;