function Item ({array}) {
    return <div>
        {array.map((el, index) => <p key = {index}>{el}</p>)}
    </div>
}

export default Item