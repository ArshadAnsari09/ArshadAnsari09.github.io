var names= new Array();
names[0]="Arshad";
names[1]="Jyoti";
names[2]="joker";
names[3]="Ansari";
names[4]="Jim";
names[5]="Rahim";
names[6]="jimmy";
names[7]="Poorvi";
names[8]="jhimwer";
for(var i=0;i<names.length;i++){
    if (names[i].charAt(0)==='j' || names[i].charAt(0)==='J' ) {
        console.log("Goodbye " +names[i]);
    }
    else{
        console.log("Hello " +names[i]);
    }
}