(function () {
    const wpUrl = "https://public-api.wordpress.com/wp/v2/sites/pureshaolin.wordpress.com/posts";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", wpUrl, true);
    xhr.onload = (e) => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.responseText);
                let content = document.getElementById("content");

                for (let i=0; i<Math.max(5, json.length); i++) {
                    let node = document.createElement("div");
                    node.innerHTML = json[i].content.rendered;
                    content.append(node);
                    content.append(document.createElement("hr"));
                }
            }
        }
    };
    xhr.timeout = 5000;
    xhr.send(null);

})()