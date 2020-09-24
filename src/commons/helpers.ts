export const textTruncate = function(str: string, length: number, ending?: string) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};

// Convert time to hours and minutes
export const calcTime = (time: number) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
};

export const convertMoney = (money: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    return formatter.format(money);
};