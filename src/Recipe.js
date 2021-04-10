const Recipe = ({title,calories,image,ingredients,digest}) => {
    const style = {  borderRadius: "10px",
        boxShadow: "0px 5px 20px gray",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "white",
        alignItems: 'center',
        minWidth: '40%',
        paddingBottom:"25px"
      }
    return (
        <div style={style} >
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>calories : {calories}</p>
            <img src={image} alt="Loading"/>
        </div>
    )
}

export default Recipe
