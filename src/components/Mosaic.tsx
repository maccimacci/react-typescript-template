import * as React from 'react';

type MosaicProps = {
    title: string,
    subtitle: string,
    description: string
  }

const Mosaic = ({title, subtitle, description} : MosaicProps) => {
    return (
        <div className="mosaic">
            <h1 className="title">{title}</h1>
            <h5 className="subtitle">{subtitle}</h5>
            <small className="description">{description}</small>
            <p></p>
        </div>
    )
}

export default Mosaic;