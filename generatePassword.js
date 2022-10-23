const digit = '0123456789';
const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialChar = '!@#$%^&*()_+=.;:';

const args = process.argv.slice(2);

if(args.length == 0){
    console.log('This utility can use arguments to change default behavior');
    console.log('   --special   enables special characters');
    console.log('   -n X        specifies length of X characters');
    console.log(' ');
}

const specialFlag=args.includes('--special')

const numFlag = args.indexOf('-n');
let numInput = 10;
if(numFlag!=-1){numInput = args[numFlag+1];}


function generatePassword(special = false, length = 10){
    if(length < 4) {
        console.log('length must be 4 or greater')
        return 'error';
    }
    let categories = 3;
    const used = [1,0,0,0,1];
    let newPass = '';
    if(special){
        categories = 4;
        used[4] = 0;
    }
    
    for (let i = 0; i < length; i++){
        let catChoice = Math.floor(Math.random()*categories)+1;
        let val;
        let index;
        
        switch (catChoice){
            case 1:
                index = Math.floor(Math.random()*digit.length)
                val = digit[index];
                newPass += val;
                used[catChoice]++;
                break;
            case 2:
                index = Math.floor(Math.random()*lowerAlpha.length)
                val = lowerAlpha[index];
                newPass += val;
                used[catChoice]++;
                break;
            case 3:
                index = Math.floor(Math.random()*upperAlpha.length)
                val = upperAlpha[index];
                newPass += val;
                used[catChoice]++;
                break;
            case 4:
                index = Math.floor(Math.random()*specialChar.length)
                val = specialChar[index];
                newPass += val;
                used[catChoice]++;
                break;
            default:
                break;
        }
    }
    if(used.includes(0)){
        return generatePassword(special, length);
    } else {
        return newPass;
    }
}

module.exports = {generatePassword};


console.log(generatePassword(specialFlag,numInput))