class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}
const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );

const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);

const yesBank = new Bank("YES Bank", "Baramati", "42251481464", "YES0004598",11.75 );

const hdfcBank = new Bank("HDFC Bank", "Kalyan", "47514897564", "HDFC0004598",10.75 );

const mapOfBanks = new Map();
mapOfBanks.set("SBI_11===>", sbiBank);
mapOfBanks.set("Axis_22===>", axisBank);
mapOfBanks.set("YES_33===>", yesBank);
mapOfBanks.set("HDFC_44===>", hdfcBank);

const element = mapOfBanks.get("YES_33");
console.log(element);

const keyOfMap = mapOfBanks.keys();
for (const key of keyOfMap) {
    const element = mapOfBanks.get(key)
    console.log(key ,element);
    
}
