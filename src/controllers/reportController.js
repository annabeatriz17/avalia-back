const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");

const animalsModel = require("../models/animalsModel");

const exportAnimalsCSV = async (req, res) => {
    try {
        const animals = await animalsModel.getAllAnimals();

        res.setHeader("Content-Disposition",  "attachment; filename=wizards.csv");
        res.setHeader("Content-Type", "text-csv");

        const csvStream = format ({ headers: true});
        csvStream.pipe(res);

        animals.forEach((animal) => {
            csvStream.write({
                Id: animal.id,
                Nome: animal.name,
                Peso: animal.peso_real,
            });
        });

        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV" });
    }
}

const exportAnimalsPDF = async (req, res) => {
    try {
        const animals = await animalsModel.getAllAnimals();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition",  "inline; filename=wizards.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

         //Titulo
         doc.fontSize(20).text("Relatório de Animais", {align: "center"});
         doc.moveDown();
 
         //Cabeçalho
         doc.fontSize(12).text("Id | Nome | Peso", {align: "center"});
         doc.moveDown(0.5);
 
         //Add dados dos animais
         animals.forEach((animal) => {
             doc.text (
                 `${animal.id} | ${animal.name} | ${animal.peso_real || "Sem peso"}`,
             );
         });
 
         doc.end();
     } catch (error) {
         res.status(500).json({ message: "Erro ao gerar o PDF"});
     }
 };

 module.exports = { exportAnimalsCSV, exportAnimalsPDF };