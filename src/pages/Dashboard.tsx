import * as React from 'react';
import Grid from '../components/Grid';
import Mosaic from '../components/Mosaic';

function Dashboard() {
    return (
        <div className="page dashboard">
            <Mosaic
                title="Dashboard" 
                subtitle="Start Here" 
                description="des" 
            />

            <Grid />
        </div>
    )
}

export default Dashboard;