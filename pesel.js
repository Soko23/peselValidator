const results = [
    {
        status: false,
        message: 'Pesel musi składać się z 11 cyfr'
    },
    {
        status: false,
        message: 'Pesel nieprawidłowy'
    },
    {
        status: true,
        message: 'Pesel prawidłowy'
    }
]

const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

const checkPesel = (pesel) => {
    let peselArr = pesel.split('');
    peselArr = peselArr.map(el => parseInt(el))
    
    let sum = 0;
    let checkDigit = 0;

    if (peselArr.length !== 11) {
        return results[0]
    }

    peselArr.forEach((element, index, peselArr) => {
        if (index === peselArr.length - 1) return
        sum += parseInt(element) * parseInt(weights[index]);
    });

    checkDigit = sum % 10;
    checkDigit = 10 - checkDigit;
    checkDigit = checkDigit % 10;
    const lastPeselDigit = peselArr.length-1;
    
    if (checkDigit === peselArr[lastPeselDigit]) {
        return results[2]
    } else {
        return results[1]
    }
}

function checkIdNumber(idNumber) {
    var sum1 = 0,
        sum2 = 0,
        sum = 0,
        checkDigit = 0,
        idNumberArr = idNumber.toUpperCase().split(''),
        weights = new Array(7, 3, 1, 7, 3, 1, 7, 3);

    var values = {
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15,
        'G': 16,
        'H': 17,
        'I': 18,
        'J': 19,
        'K': 20,
        'L': 21,
        'M': 22,
        'N': 23,
        'O': 24,
        'P': 25,
        'Q': 26,
        'R': 27,
        'S': 28,
        'T': 29,
        'U': 30,
        'V': 31,
        'W': 32,
        'X': 33,
        'Y': 34,
        'Z': 35
    };
    
    if (idNumberArr.length != 9) {
    } else {
        for (var i = 0; i < 3; i++) {
            var key = idNumberArr[i];
            sum1 += parseInt(values[key]) * parseInt(weights[i]);
        }

        for (var j = 4; j <= idNumberArr.length - 1; j++) {        
            sum2 += parseInt(idNumberArr[j]) * parseInt(weights[j-1]);
        }

        sum = sum1 + sum2;
        checkDigit = sum % 10;
        
        if (checkDigit == idNumberArr[3]) {
        } else {
        }
    }
}