type HelpingProps = {
    month: string;
    count: number
}
export const getMonth = (argu1: string, argu2: string): HelpingProps => {
    const returnObject = {
        month: '',
        count: 0
    }
    const monthObj = {
        "January": "January",
        "February": "February",
        "March": "March",
        "April": 'April',
        "May": "May",
        "June": "June",
        "July": "July",
        "August": "August",
        "September": "September",
        "October": 'October',
        "November": "November",
        "December": "December"
    }
    if (argu1 === 'December') {
        returnObject['month'] = "January"
        returnObject['count'] = 1
    }
    else if (argu1 === 'January' && argu2 === 'last') {
        returnObject['month'] = "December"
        returnObject['count'] = 12
    } else {
        returnObject['month'] = argu2 === 'next' ?
            (Object.keys(monthObj)[Object.keys(monthObj).indexOf(argu1) + 1])
            : Object.keys(monthObj)[Object.keys(monthObj).indexOf(argu1) - 1]
        returnObject['count'] = argu2 === 'next' ? Object.keys(monthObj).indexOf(argu1) + 2 : Object.keys(monthObj).indexOf(argu1)
    }
    return returnObject;
}

export const stringToNumber = (argu: string) => {
    let value = argu.split('€')[0] ? argu.split('€')[0] : argu.split(' ')[0]
    return parseFloat(value)
}