let links = document.getElementsByClassName("index-link-item");


for (let li_item of links) {
    li_item.addEventListener("click", event => {
        href = li_item.children[0].getAttribute("href");
        if (href[0] == "#") {
            href = href.slice(1);
            document.getElementById(href).open = true;
        }
    });
};