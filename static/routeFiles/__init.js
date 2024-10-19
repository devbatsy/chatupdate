import { __g, __u } from "../../sydneyDom_v2.js";
import {newfetch} from "./globFuncLib.js";


export const initUser = async () =>{
    const response = await newfetch({
        method:"POST",
        route:"/init/user_info",
        body:{pubID:clientPubID}
    })

    const userInitData = JSON.parse(response.jsonResponse.data);

    console.log(userInitData)

    setUserLanguage(userInitData.appSetting.language);
    setTimeout(() => {
        setUserLanguage(userInitData.appSetting.language);
    }, 500);

    init_friend_list(userInitData.contacts);
    init_group_list(userInitData.groups)
    
}

function setUserLanguage(language)
{
    const translateElement = document.getElementById('google_translate_element');

    let selectMainEl = translateElement.getElementsByTagName('select')[0];

    const elementNode = Array.from(selectMainEl.children);

    for(let i = 0; i < elementNode.length; i++)
    {
        if(elementNode[i].value.toLowerCase() === language.toLowerCase())
        {
            elementNode[i].setAttribute('selected' , '');
            selectMainEl.value = elementNode[i].value;
            
            const newEvent = new Event("change" , {
                bubbles:true,
                cancelable:true
            })

            selectMainEl.dispatchEvent(newEvent);
            break;
        }
    }
}

function init_friend_list(contact)
{
    const state = __g("chatMainPanel");
    state.contactChatArray = contact;
    __u('chatMainPanel' , {type:"a" , value:state})
}


function init_group_list(groups)
{
    const state = __g("chatMainPanel");
    state.contactGroupArray = groups;
    __u('chatMainPanel' , {type:"a" , value:state})
}