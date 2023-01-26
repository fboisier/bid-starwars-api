const Movies = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }

    return props.movies.map((item, index) => {
        return <button key={index} onClick={(e) => onClickHandler(e, item)}>{item}</button>
    });
}

export default Movies;