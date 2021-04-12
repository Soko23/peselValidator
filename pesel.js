const results = [
    {
        status: false,
        message: 'Pesel musi składać się z 11 cyfr',
    },
    {
        status: false,
        message: 'Pesel nieprawidłowy',
    },
    {
        status: true,
        message: 'Pesel prawidłowy',
    },
    {
        status: false,
        message: 'Nieprawidłowy typ danych',
    },
]

const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]

const checkPesel = (pesel) => {
    if (typeof pesel !== 'string') return results[3]

    let peselArr = pesel.split('')
    peselArr = peselArr.map((el) => parseInt(el))

    let sum = 0
    let checkDigit = 0

    if (peselArr.length !== 11) {
        return results[0]
    }

    peselArr.forEach((element, index, peselArr) => {
        if (index === peselArr.length - 1) return
        sum += parseInt(element) * parseInt(weights[index])
    })

    checkDigit = sum % 10
    checkDigit = 10 - checkDigit
    checkDigit = checkDigit % 10
    const lastPeselDigit = peselArr.length - 1

    if (checkDigit === peselArr[lastPeselDigit]) {
        return results[2]
    } else {
        return results[1]
    }
}
