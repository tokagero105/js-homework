function currencyConverter(amount, baseCurrency, quoteCurrency) {
    let USD_RUB = 87;
    let EUR_RUB = 94;
    let USD_EUR = 0.93;

    switch (quoteCurrency) {
        case 'USD':
            switch (baseCurrency) {
                case 'RUB':
                    return amount / USD_RUB;
                case 'EUR':
                    return amount / USD_EUR;
                default:
                    return null;
            }

        case 'EUR':
            switch (baseCurrency) {
                case 'RUB':
                    return amount / EUR_RUB;
                case 'USD':
                    return amount * USD_EUR;
            }
        
        case 'RUB':
            switch (baseCurrency) {
                case 'USD':
                    return amount * USD_RUB;
                case 'EUR':
                    return amount * EUR_RUB;
                default:
                    return null;
            }

        default:
            return null;
    }
}