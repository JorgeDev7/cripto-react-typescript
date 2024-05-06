import { currencies } from "../data";

export default function CriptoSearchForm() {
    return (
        <form
            className="form"
        >
            <div className="field">
                <label htmlFor="currency">Moneda</label>
                <select
                    name="currency"
                    id="currency"
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
                <label htmlFor="cripto-currency">Criptomoneda</label>
                <select
                    name="cripto-currency"
                    id="cripto-currency"
                >
                    <option value="">-- Seleccione --</option>
                </select>
            </div>

            <input
                type="submit"
                value="Cotizar"
            />
        </form>
    );
}
