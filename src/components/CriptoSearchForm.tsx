import { useCryptoStore } from "../store";
import { currencies } from "../data";
import { ChangeEvent, FormEvent, useState } from "react";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {

    const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
    const fetchData = useCryptoStore((state) => state.fetchData);
    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    });
    const [error, setError] = useState('');

    const handleChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitCurrency = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios');
            return;
        }
        setError('');

        // consultar API
        fetchData(pair);
    };

    return (
        <form
            className="form"
            onSubmit={handleSubmitCurrency}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Moneda</label>
                <select
                    name="currency"
                    id="currency"
                    onChange={handleChangeCurrency}
                    value={pair.currency}
                >
                    <option value="">-- Seleccione --</option>
                    {currencies.map(currency => (
                        <option
                            key={currency.code}
                            value={currency.code}
                        >{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda</label>
                <select
                    name="criptocurrency"
                    id="criptocurrency"
                    onChange={handleChangeCurrency}
                    value={pair.criptocurrency}
                >
                    <option value="">-- Seleccione --</option>
                    {cryptocurrencies.map(crypto => (
                        <option
                            key={crypto.CoinInfo.Name}
                            value={crypto.CoinInfo.Name}
                        >{crypto.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>

            <input
                type="submit"
                value="Cotizar"
            />
        </form>
    );
}
