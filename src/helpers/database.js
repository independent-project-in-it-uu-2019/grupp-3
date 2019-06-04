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

export function getAllInfoMethods(){
    var url = "http://www2.teknat.uu.se/TLT/database_connect/get/get_methods_with_info.php?Table=Tool";
    return fetchData(url);
}
