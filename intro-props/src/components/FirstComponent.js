function FirstComponent(props) { // in props place we can anyword
    return (
        <div className="card">
            <h3 >{props.title}</h3>
            <p>Here are some details of my components</p>
        </div>
    )
}

export default FirstComponent;