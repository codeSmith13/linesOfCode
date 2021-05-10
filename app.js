let friends = ["Chris", "Kvoth", "Bast", "Taborlin", "Arliden"];
// selects friends and decreases the number of codes numCode 
for (f = 0; f < friends.length; f++){
    let friend = friends[f]; {
        for (numCode = 99; numCode > 0; numCode--) {
            let minusOne = numCode - 1;
            if (numCode > 1) {
            console.log(numCode + " lines of code in the file, " + numCode + " lines of code; " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file");
            } else  {
            console.log("1 line of code in the file, 1 line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }
    }
    
};

