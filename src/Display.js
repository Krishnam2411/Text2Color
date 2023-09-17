const Display = ({ colorValue, hexValue }) => {
    return (
        <section className = "display" style = {{ backgroundColor: colorValue }}>
            <p id = "colorName" >{colorValue ? colorValue.toUpperCase() : "No Color"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

// Display.defaultProp = {
//     colorValue: "No color"
// }

export default Display