import colorNames from 'colornames'
const Input = ({ colorValue, setColorValue, setHexValue }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                autoFocus
                autoComplete="false"
                type="text"
                placeholder="Enter Color Name"
                required
                value = {colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
        </form>
    )
}

export default Input