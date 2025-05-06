const PDFDocument = require("pdfkit");

const animalsModel = require("../models/animalsModel");

const exportAnimalsPDF = async (req, res) => {
    try {
        const animals = await animalsModel.getAllAnimals();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition",  "inline; filename=animals.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatório de Animais", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Nome | Peso ", {align: "center"});
        doc.moveDown(0.5);

        //Add dados dos Animais
        animals.forEach((animal) => {
            doc.fontSize(10).text(
                `${animal.id} | ${animal.name} | ${animal.peso_real || "Sem Peso"}`,
            );
        });

        doc.end();
    } catch (error) {
        console.error("Erro ao gerar o PDF:", error); // Log do erro para análise
    res.status(500).json({ message: "Erro ao gerar o PDF" });
}
};
module.exports = { exportAnimalsPDF };