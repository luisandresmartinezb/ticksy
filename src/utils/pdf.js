// Generación de entradas en PDF.
// Uso jsPDF para crear una entrada descargable con datos dinámicos del concierto.
// Uso qrcode para generar un QR real con la información principal del ticket.

import jsPDF from "jspdf";
import QRCode from "qrcode";

export async function generateTicketPDF(ticket) {
  const doc = new jsPDF();

  const qrPayload = JSON.stringify({
    ticketCode: ticket.code,
    event: ticket.eventTitle,
    city: ticket.city,
    place: ticket.place,
    date: ticket.date,
    time: ticket.time,
    quantity: ticket.quantity,
    user: ticket.userName
  });

  const qrImage = await QRCode.toDataURL(qrPayload, {
    width: 220,
    margin: 1
  });

  // Fondo principal
  doc.setFillColor(12, 12, 18);
  doc.rect(0, 0, 210, 297, "F");

  // Cabecera
  doc.setFillColor(140, 0, 0);
  doc.rect(0, 0, 210, 38, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("TICKSY", 18, 24);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("ENTRADA DIGITAL", 150, 22);

  // Tarjeta blanca del ticket
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(14, 52, 182, 150, 6, 6, "F");

  // Banda lateral
  doc.setFillColor(140, 0, 0);
  doc.roundedRect(14, 52, 14, 150, 6, 6, "F");

  doc.setTextColor(18, 18, 25);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(ticket.eventTitle, 36, 75, { maxWidth: 100 });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(70, 70, 80);

  doc.text("LUGAR", 36, 98);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(20, 20, 28);
  doc.text(ticket.place, 36, 106, { maxWidth: 90 });

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 80);
  doc.text("CIUDAD", 36, 122);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(20, 20, 28);
  doc.text(ticket.city, 36, 130);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 80);
  doc.text("FECHA Y HORA", 36, 146);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(20, 20, 28);
  doc.text(`${ticket.date} · ${ticket.time}`, 36, 154);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 80);
  doc.text("ENTRADAS", 36, 170);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(20, 20, 28);
  doc.text(String(ticket.quantity), 36, 178);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 80);
  doc.text("TOTAL", 72, 170);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(140, 0, 0);
  doc.text(`${ticket.total.toFixed(2)} €`, 72, 178);

  // QR real
  doc.addImage(qrImage, "PNG", 142, 76, 38, 38);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 80);
  doc.setFontSize(9);
  doc.text("ESCANEA PARA VALIDAR", 141, 122);

  // Código de entrada
  doc.setFillColor(245, 245, 248);
  doc.roundedRect(36, 184, 144, 12, 3, 3, "F");
  doc.setTextColor(18, 18, 25);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(`CÓDIGO DE ENTRADA: ${ticket.code}`, 42, 192);

  // Bloque inferior
  doc.setTextColor(235, 235, 240);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Información del asistente", 18, 224);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(`Titular: ${ticket.userName}`, 18, 238);
  doc.text(`Fecha de compra: ${ticket.createdAt}`, 18, 250);

  doc.setFontSize(9);
  doc.setTextColor(170, 170, 180);
  doc.text("Conserva esta entrada. El código QR contiene la información de validación del ticket.", 18, 270, {
    maxWidth: 170
  });

  doc.save(`ticksy-${ticket.code}.pdf`);
}
