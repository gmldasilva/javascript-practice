import "../css/styles.scss";
import img from "../assets/aoe.jpg";

const textComponent = () => {
    const elH1 = document.createElement("h1");
    elH1.innerHTML = "Olá mundo!"
    elH1.classList.add('title')
    return elH1;
}

const imgComponent = () => {
    const elImg = new Image(500,230);
    elImg.src = img;
    return elImg;
}

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());