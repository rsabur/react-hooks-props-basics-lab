function Links(props) {
    return (
        <>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a><br />
        <a href={props.linkedin}>{props.linkedin}</a>
      </>
    )
}

export default Links;