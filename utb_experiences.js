    /* Tidigare erfarenheter */
const expApiUrl = "exp.json";
    let temptxt = "";
    async function getExperienceJson() {
        const data = await fetch(expApiUrl);
        const experiences = await data.json();

        for (let i = 0; i < experiences.length; i++) {
            ;
            let obj = experiences[i];
            for (let key in obj) {let value = obj[key];
                temptxt +=  value + "<br>  ";
            }
            document.getElementById("exp").innerHTML = temptxt;
            temptxt += "<br/>"
            }
    }

    /* Utbildningar och Språk */
const utbApiUrl = "utb.json";
    let temptext = "";
    async function getUtbildningJson() {
        const data = await fetch(utbApiUrl);
        const portfolio = await data.json();

        for (let i = 0; i < portfolio.length; i++) {
            ;
            let obj = portfolio[i];
            for (let key in obj) {let value = obj[key];
                temptext +=  value + "<br>  ";
            }
            document.getElementById("utbsprk").innerHTML = temptext;
            temptext += "<br/>"
            }
    }