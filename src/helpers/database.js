/*
API documentation can be found here: https://docs.google.com/document/d/1PMQxPJn-gZk10L-H03Pubftxo1xoe-op4FMCaINRVLU/edit#
All methods below return a JSON-object
*/

function fetchData(url) {
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        console.log(res.clone().json());
        return res.clone().json();
    }).catch((err) => {
        console.log("Error");
        console.log(err);
        return err;
    })
}

async function postData(data, url) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((res) => {
        console.log(res);
    })
        .then((data) => {
            alert(JSON.stringify(data));
        })
}

export function getAllMethods() {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_record_all.php?Table=Method";
    return fetchData(url);
}

export function getAllTools() {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_record_all.php?Table=Tool";
    return fetchData(url);
}

export function getToolInfo(toolID) {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_tool_with_info.php?Tool_ID=" + toolID;
    return fetchData(url);
}

export function getMethodInfo(methodID) {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_method?Method_ID=" + methodID;
    return fetchData(url);
}

export function getAllKeywords() {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_current_keywords.php";
    return fetchData(url);
}

export function getKeywordsInUse() {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_all_keywords.php";
    return fetchData(url);
}

export function getCategorizedKeywords() {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_categorized_keywords.php";
    return fetchData(url);
}

export function getKeywordsOfTool(toolID) {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_keywords_for_tool_new.php?Tool_ID=" + toolID;
    return fetchData(url);
}

export function getAllProviders() {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_record_all.php?Table=Provider_link";
    return fetchData(url);
}

export function getLatestToolID() {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_latest_tool.php";
    return fetchData(url);
}

export function getMethodsByToolID(toolID) {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_method_tool_map.php?ID="+toolID+"&Table=Method";
    return fetchData(url);
}

export function getToolsByMethodID(methodID) {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_method_tool_map.php?ID="+methodID+"&Table=Tool";
    return fetchData(url);
}

export function adminAddRecord(entry) {
    var url = "http://www2.teknat.uu.se/TLT/database_connect/add/add_record.php";
    var mockData = {
        "Table": "Tool",
        "Name": "Bettan",
        "Description": "Queen of TLT",
        "Short_description": "Queeeeeen",
        "Pedagogical_info": null,
        "Technical_info": null,
        "Image_url": "https://images.unsplash.com/photo-1558197385-575ecbf37bef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    }
    postData(mockData, url);
}
