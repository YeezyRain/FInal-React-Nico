import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import './Item.css'

const Item = ({ id, name, image, price, description }) => {
    return (
        <Card className="card">
            <Link to={`/item/${id}`}>
                <Image src={image} />
            </Link>
            <Card.Content>
                <Link to={`/item/${id}`}>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span className="info">{description}</span>
                    </Card.Meta>
                    <Card.Description>
                        <p>${price} por unidad</p>
                    </Card.Description>
                </Link>
            </Card.Content>
        </Card>
    )
}

export default Item
