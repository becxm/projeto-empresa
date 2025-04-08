const textos = [
    "Somos uma empresa especializada em soluções digitais completas, unindo tecnologia, performance e criatividade para transformar ideias em experiências incríveis. Atuamos com excelência nas áreas de back-end, front-end e design, oferecendo produtos digitais modernos, funcionais e visualmente impactantes. Nosso time é formado por desenvolvedores e designers apaixonados por inovação.",
    "No back-end, construímos estruturas sólidas, seguras e escaláveis que garantem performance e confiabilidade. No front-end, traduzimos essas estruturas em interfaces fluidas e intuitivas.",
    "E com o design, damos vida às marcas e produtos com estética, propósito e identidade. Acreditamos na tecnologia como ferramenta para impulsionar negócios, conectar pessoas e resolver problemas. Por isso, cada projeto é único e tratado com foco em resultados reais, aliando estratégia, criatividade e código. estamos prontos para criar junto com você."
];
let index= 0;

function typeWriter(text, i = 0) {
const el = document.getElementById("text");
if (i === 0) el.textContent = ""; 
if (i < text.length) {
el.textContent += text.charAt(i);
setTimeout(() => typeWriter(text, i + 1), 10); // tempo de digitação //
}
}

function trocarTexto() {
index = (index + 1) % textos.length;
typeWriter(textos[index]);
}

function trocarTexto2() {
    index = (index - 1) % textos.length;
    typeWriter(textos[index]);
    }

window.onload = () => typeWriter(textos[0]);