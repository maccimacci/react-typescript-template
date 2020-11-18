import * as React from 'react';
import Grid from '../components/Grid';
import Mosaic from '../components/Mosaic';

function News() {
    return (
        <div className="page news">
        <Mosaic
                title="News" 
                subtitle="News to her and why not to him" 
                description="FTP to HUB and then HUB to GLM" 
            />

        <Grid />
    </div>
    )
}

export default News;