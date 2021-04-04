import { jsPDF } from "jspdf";
import "jspdf-autotable";


const column = [
    "Invoice Number",
    "PO Number",
    "Invioce Date",
    "Due Date",
    "Currency",
    "Open Amount ($)",
];
function createData(ino, po, idate, ddate, curr, amount) {
    let kk = {
        "Invoice Number": ino,
        "PO Number": po,
        "Invioce Date": idate,
        "Due Date": ddate,
        Currency: curr,
        "Open Amount ($)": amount,
    };
    return Object.assign({}, kk);
}
const generateHeader = (column) => {
    var result = [];
    for (var i = 0; i < column.length; i += 1) {
        result.push({
            id: column[i],
            width: 80,
            align: "center",
            padding: 0,
        });
    }
    return result;
};
const header = generateHeader(column);
const myhtml = "";

function genratePdf(addAmount, finalCheckItemList, template, age) {
    // console.log(`Inside genratePdf : finalCheckItemList=${finalCheckItemList.map(e => e.nameCustomer)}`)
    //   let tdata = template.t1;
    //   let header = "";
    //   let footer = "";
    //   if (age === 20) tdata = template.t2;

    //   console.log(template);
    //   let data1 = store.getState().invoice.selectedData;
    //   if (Object.keys(template).length > 0) {
    const data = [{
        areaBusiness: "",
        baselineCreateDate: "Jan 1, 2019",
        businessCode: "U001",
        businessYear: 2019,
        clearDate: "Jan 16, 2019 12:00:00 AM",
        custNumber: "0200458131",
        custPaymentTerms: "NAA8",
        docId: 1928501776,
        documentCreateDate: "Dec 31, 2018",
        documentType: "RV",
        dueInDate: "Jan 16, 2019",
        invoiceCurrency: "USD",
        invoiceId: 1928501776,
        isOpen: 0,
        nameCustomer: "TIMES associates",
        postingDate: "Jan 1, 2019",
        postingId: 1,
        totalOpenAmount: 9999.99,
    }]
    let header = `Subject :Invoice Details -[ Account Name ]

    Dear Sir/Madam,
    Greetings!
    
    This is to remind you that there are one or more open invoices on your account. Please provide at your earliest convenience an update on the payment details or clarify the reason for the delay. If you have any specific issue with the invoice(s), please let us know so that we can address it to the correct Department.
    `;

    let footer = `Total Amount to be Paid :$124.00K

    In case you have already made a payment for the above items, please send us the details to ensure the payment is posted.
    Let us know if we can be of any further assistance.
    Looking forward to hearing from you.
    
    Kind Regards,
    [Sender’s First Name][Sender’s Last Name]
    Phone : [Sender’s contact number]`;
    //   }
    function headRows() {
        return [
            {
                id: "Invoice Number",
                no: "PO Number",
                date: "Invioce Date",
                cur: "Currency",
                amount: "amount",
                ddate: "Due Date",
            },
        ];
    }
    function bodyRows() {
        var body = [];
        for (var j = 0; j < finalCheckItemList.length; j++) {
            body.push({
                id: finalCheckItemList[j].invoiceId,
                no: finalCheckItemList[j].custNumber,
                date: finalCheckItemList[j].postingDate,
                cur: finalCheckItemList[j].invoiceCurrency,
                amount: finalCheckItemList[j].totalOpenAmount,
                ddate: finalCheckItemList[j].dueInDate,
            });
        }
        return body;
    }
    // const data = [
    //     createData(
    //         "1928501770",
    //         "1928501770",
    //         "Jan 1, 2019",
    //         "Jan 16, 2019",
    //         "USD",
    //         "184.29"
    //     ),
    // ];
    var doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Invoice Details", 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);
    var pageSize = doc.internal.pageSize;
    var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
    var text = doc.splitTextToSize(header, pageWidth - 35, {});
    doc.text(text, 14, 30);

    doc.autoTable({
        head: headRows(),
        body: bodyRows(),
        startY: 80,
        showHead: "firstPage",
    });
    text = doc.splitTextToSize(footer, pageWidth - 35, {});
    doc.text(text, 14, doc.lastAutoTable.finalY + 10);
    window.open(doc.output("bloburl"), "_blank");
};
export default genratePdf;