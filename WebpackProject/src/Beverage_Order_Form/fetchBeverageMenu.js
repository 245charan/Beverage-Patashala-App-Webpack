function loadMenu() {
    let jsonData;
    import ('../Customer_View/beveragesList.json')
    .then(({ default: data }) => {
            jsonData = data.filter((obj) => {
                return obj.available === true;
            });

            //Create a dropdown list with the json data
            jsonData.forEach((obj) => {
                let select = document.getElementById("beverageList");
                let option = document.createElement("option");
                option.value = obj.name;
                option.innerHTML = obj.name;
                select.appendChild(option);
            });
        })
        .catch((error) => {
            throw "Unable to load JSON data";
        });
}

export { loadMenu };