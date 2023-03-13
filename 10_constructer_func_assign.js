function Bank (bankName,location,ifsc,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifsc = ifsc;
    this.branchCode = branchCode;

    this.show = function(){
        console.log(`**** Bank Details is :"${bankName}","${location}","${ifsc}","${branchCode}"****`);
    }
}
Bank.prototype.openTime = "9 AM Ist";
Bank.prototype.closeTime = "6 PM Ist";
 
const yesBank = new Bank("YesBank", "Kalyan", "YES6879", "4872");
yesBank.show();

const sbiBank = new Bank("SBI Bank","Thane", "SBIN7687", "3678");
sbiBank.show();

const mahBank = new Bank("MAH Bank", "Airoli", "MAHB6890", "7658");
mahBank.show();

const axisBank = new Bank("Axis Bank", "Vashi", "AXIS9345", "4792");
axisBank.show();

console.log(`*******************SBI BANK**************************`);
console.log(`Opening time of ***SBI Bank*** is : ${sbiBank.openTime}`);
console.log(`closing time of ***SBI Bank*** is : ${sbiBank.closeTime}`);

console.log(`*******************AXIS BANK**************************`);
console.log(`Name of Bank is :  ${axisBank.bankName}`);
console.log(`closing time of ***Axis Bank*** is : ${axisBank.closeTime}`);

console.log(`*******************YES BANK**************************`);
console.log(`Name of Bank is : ${yesBank.bankName}`);
console.log(`Branch code of ***Yes Bank*** is : ${yesBank.branchCode}`);
console.log(`Opening time of ***Yes Bank*** is : ${yesBank.openTime}`);
 