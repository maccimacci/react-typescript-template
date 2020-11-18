import * as React from 'react';
import Grid from '../components/Grid';
import Mosaic from '../components/Mosaic';
import { INovedad } from '../interfaces/News';
import api from '../services/api.service';

const Notifications= () => {

    const defaultNovedad:INovedad[] = [];
    const [novedad, setNovedad]: [INovedad[], (novedad: INovedad[]) => void] = React.useState(defaultNovedad);

    React.useEffect(() => {
        api.getNovedades('972')
        .then((response)=> setNovedad(response.data))
        .catch((error) => console.log(error))
    },[]);

    return (
        <div className="page notifications">
            <Mosaic
                title="Notifications" 
                subtitle="its raining emails !!!" 
                description="Caja sent emails throwth us" 
            />

            <Grid />
            
            {novedad.map((nov,index) => (
                <div key={index}>
                    <h3>{nov.codigoProductor}</h3>
                    <p>{nov.nombreProductor}</p>
                </div>
            ))}

        </div>
    )
}

export default Notifications;
